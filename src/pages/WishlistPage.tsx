import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { products } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useStore();
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-8">
          <Heart className="inline w-6 h-6 text-primary mr-2" />
          My Wishlist ({wishlistProducts.length})
        </h1>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">💖</p>
            <h2 className="font-heading text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Save your favorite items for later</p>
            <Link to="/products" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">Browse Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {wishlistProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
