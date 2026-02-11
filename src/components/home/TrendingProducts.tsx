import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const TrendingProducts = () => {
  const trending = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Hot Right Now</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">What everyone's loving this season</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground bg-card border border-border px-5 py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {trending.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="text-center mt-10 md:hidden">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
