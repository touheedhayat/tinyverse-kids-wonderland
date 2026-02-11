import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
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
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image */}
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
          <div
            className="aspect-[3/4] flex items-center justify-center text-4xl font-heading font-bold text-foreground/8 group-hover:scale-110 transition-transform duration-700 ease-out"
            style={{ background: product.images[0] }}
          >
            {product.name.split(" ").map(w => w[0]).join("")}
          </div>
          {product.offerPrice && (
            <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-[10px] font-bold px-2.5 py-1.5 rounded-full shadow-sm">
              {Math.round((1 - product.offerPrice / product.price) * 100)}% OFF
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${wishlisted ? "bg-primary text-primary-foreground scale-110" : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground"}`}
          >
            <Heart className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} />
          </button>
          {/* Quick actions */}
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 flex gap-2">
            <button
              onClick={(e) => { e.preventDefault(); addToCart(product, product.sizes[0], product.colors[0].name); }}
              className="flex-1 bg-foreground/90 text-background text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-foreground transition-colors backdrop-blur-sm shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
            </button>
            <Link
              to={`/product/${product.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-card transition-colors shadow-lg border border-border/50"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        </Link>

        {/* Info */}
        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">{product.category}</p>
            <h3 className="font-heading font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-3 h-3 ${j < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground">({product.reviewCount})</span>
            </div>
            <div className="flex items-center gap-2">
              {product.offerPrice ? (
                <>
                  <span className="font-bold text-sm">Rs. {product.offerPrice.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground line-through">Rs. {product.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="font-bold text-sm">Rs. {product.price.toLocaleString()}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
