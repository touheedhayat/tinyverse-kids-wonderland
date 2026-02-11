import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const BestSellers = () => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Most Loved</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Best Sellers</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
