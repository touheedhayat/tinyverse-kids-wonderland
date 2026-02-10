import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Minus, Plus, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react";
import { products, reviews } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">😕</p>
        <h1 className="font-heading text-2xl font-bold mb-2">Product Not Found</h1>
        <Link to="/products" className="text-primary hover:underline text-sm">Back to Shop</Link>
      </div>
      <Footer />
    </div>
  );

  const wishlisted = isInWishlist(product.id);
  const relatedProducts = products.filter(p => p.id !== product.id && (p.category === product.category || p.gender === product.gender)).slice(0, 4);
  const productReviews = reviews.filter(r => r.productId === product.id);

  const handleAddToCart = () => {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0].name;
    addToCart(product, size, color, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-primary">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center text-6xl font-heading font-bold text-foreground/10" style={{ background: product.images[0] }}>
            {product.name.split(" ").map(w => w[0]).join("")}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
            <div>
              <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
              <h1 className="font-heading text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-3">
                {product.offerPrice ? (
                  <>
                    <span className="text-2xl font-bold">Rs. {product.offerPrice.toLocaleString()}</span>
                    <span className="text-lg text-muted-foreground line-through">Rs. {product.price.toLocaleString()}</span>
                    <span className="text-sm bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-medium">{Math.round((1 - product.offerPrice / product.price) * 100)}% OFF</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold">Rs. {product.price.toLocaleString()}</span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Size */}
            <div>
              <p className="text-sm font-medium mb-2">Size: <span className="text-muted-foreground font-normal">{product.ageRange}</span></p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${selectedSize === size ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground/30"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button key={color.name} onClick={() => setSelectedColor(color.name)} className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? "border-foreground scale-110" : "border-transparent hover:border-border"}`} style={{ backgroundColor: color.hex }} title={color.name} />
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:bg-muted transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:bg-muted transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-lg font-heading font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <ShoppingBag className="w-4 h-4" /> Add to Bag
              </button>
              <button onClick={() => toggleWishlist(product.id)} className={`p-3.5 rounded-lg border transition-colors ${wishlisted ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}>
                <Heart className="w-5 h-5" fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Info badges */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              {[{ icon: Truck, text: "Free Shipping" }, { icon: RotateCcw, text: "Easy Returns" }, { icon: Shield, text: "Secure Payment" }].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1.5 text-center p-3 bg-muted/50 rounded-lg">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>

            {product.stock < 20 && (
              <p className="text-sm text-destructive">🔥 Only {product.stock} left in stock!</p>
            )}
          </motion.div>
        </div>

        {/* Reviews */}
        {productReviews.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="space-y-4">
              {productReviews.map(review => (
                <div key={review.id} className="bg-card rounded-xl p-5 border border-border">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                    ))}
                  </div>
                  <p className="text-sm mb-2">"{review.comment}"</p>
                  <p className="text-xs text-muted-foreground">— {review.customerName}, {review.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
