import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const BestSellers = () => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Most Loved</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Best Sellers</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Our most loved pieces, adored by parents everywhere</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
