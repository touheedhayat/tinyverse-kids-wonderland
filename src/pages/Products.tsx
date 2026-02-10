import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedGender, setSelectedGender] = useState(searchParams.get("gender") || "");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState("newest");

  const searchQuery = searchParams.get("search") || "";
  const saleOnly = searchParams.get("sale") === "true";

  const filtered = useMemo(() => {
    let result = [...products];
    if (searchQuery) result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    if (selectedCategory) result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase() || p.ageRange.toLowerCase().includes(selectedCategory));
    if (selectedGender && selectedGender !== "seasonal") result = result.filter(p => p.gender === selectedGender || p.gender === "unisex");
    if (saleOnly) result = result.filter(p => p.offerPrice);
    result = result.filter(p => { const price = p.offerPrice || p.price; return price >= priceRange[0] && price <= priceRange[1]; });
    switch (sortBy) {
      case "price-low": result.sort((a, b) => (a.offerPrice || a.price) - (b.offerPrice || b.price)); break;
      case "price-high": result.sort((a, b) => (b.offerPrice || b.price) - (a.offerPrice || a.price)); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return result;
  }, [searchQuery, selectedCategory, selectedGender, priceRange, sortBy, saleOnly]);

  const allCategories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Shop{searchQuery ? `: "${searchQuery}"` : ""}{saleOnly ? " — Sale" : ""}</span>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0 space-y-6">
            <div>
              <h3 className="font-heading font-semibold mb-3 text-sm">Category</h3>
              <div className="space-y-2">
                <button onClick={() => setSelectedCategory("")} className={`block text-sm ${!selectedCategory ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}>All</button>
                {allCategories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`block text-sm ${selectedCategory === cat ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}>{cat}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-3 text-sm">Gender</h3>
              <div className="space-y-2">
                {["", "boys", "girls", "unisex"].map(g => (
                  <button key={g} onClick={() => setSelectedGender(g)} className={`block text-sm capitalize ${selectedGender === g ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}>{g || "All"}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-3 text-sm">Price Range</h3>
              <input type="range" min={0} max={5000} step={100} value={priceRange[1]} onChange={e => setPriceRange([0, Number(e.target.value)])} className="w-full accent-primary" />
              <p className="text-xs text-muted-foreground mt-1">Up to Rs. {priceRange[1].toLocaleString()}</p>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{filtered.length} products</p>
              <div className="flex items-center gap-3">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm bg-muted rounded-lg px-3 py-2 outline-none border-none">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <button onClick={() => setFiltersOpen(true)} className="lg:hidden p-2 bg-muted rounded-lg">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-lg font-heading font-semibold mb-2">No products found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filters sheet */}
        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-foreground/30" onClick={() => setFiltersOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-72 bg-card p-6 overflow-y-auto animate-slide-in-right">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold">Filters</h3>
                <button onClick={() => setFiltersOpen(false)}><X className="w-5 h-5" /></button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm mb-3">Category</h4>
                  {["", ...allCategories].map(cat => (
                    <button key={cat} onClick={() => { setSelectedCategory(cat); setFiltersOpen(false); }} className={`block py-1.5 text-sm ${selectedCategory === cat ? "text-primary font-medium" : "text-muted-foreground"}`}>{cat || "All"}</button>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-3">Gender</h4>
                  {["", "boys", "girls", "unisex"].map(g => (
                    <button key={g} onClick={() => { setSelectedGender(g); setFiltersOpen(false); }} className={`block py-1.5 text-sm capitalize ${selectedGender === g ? "text-primary font-medium" : "text-muted-foreground"}`}>{g || "All"}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
