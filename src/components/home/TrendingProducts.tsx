import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const TrendingProducts = () => {
  const trending = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Hot Right Now</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Trending Now</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-1.5 text-xs font-medium text-foreground bg-card border border-border px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {trending.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="text-center mt-6 md:hidden">
          <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
            View All Products <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
