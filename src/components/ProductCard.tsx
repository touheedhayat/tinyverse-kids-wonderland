import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { motion } from "framer-motion";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
          <div
            className="aspect-[3/4] flex items-center justify-center text-4xl font-heading font-bold text-foreground/10 group-hover:scale-105 transition-transform duration-500"
            style={{ background: product.images[0] }}
          >
            {product.name.split(" ").map(w => w[0]).join("")}
          </div>
          {product.offerPrice && (
            <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              {Math.round((1 - product.offerPrice / product.price) * 100)}% OFF
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${wishlisted ? "bg-primary text-primary-foreground" : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground"}`}
          >
            <Heart className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} />
          </button>
          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addToCart(product, product.sizes[0], product.colors[0].name); }}
              className="w-full bg-foreground/90 text-background text-xs font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-foreground transition-colors backdrop-blur-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
            </button>
          </div>
        </Link>

        {/* Info */}
        <div className="p-3.5">
          <Link to={`/product/${product.id}`}>
            <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-heading font-semibold text-sm leading-tight mb-1.5 group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-xs text-muted-foreground">{product.rating} ({product.reviewCount})</span>
            </div>
            <div className="flex items-center gap-2">
              {product.offerPrice ? (
                <>
                  <span className="font-semibold text-sm">Rs. {product.offerPrice.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground line-through">Rs. {product.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="font-semibold text-sm">Rs. {product.price.toLocaleString()}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
