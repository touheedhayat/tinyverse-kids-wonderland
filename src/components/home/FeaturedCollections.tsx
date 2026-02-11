import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const icons: Record<string, string> = {
  boys: "👦",
  girls: "👧",
  newborn: "👶",
  seasonal: "🌸",
};

const FeaturedCollections = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3 block">Curated For You</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Shop by Collection</h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base">Find the perfect outfit for every little explorer in your life</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={`/products?gender=${cat.slug}`} className="block group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500" style={{ background: cat.gradient }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <motion.span
                      className="text-6xl mb-4 block"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {icons[cat.slug] || "✨"}
                    </motion.span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">{cat.name}</h3>
                    <p className="text-sm text-foreground/50 mb-4">{cat.count} Products</p>
                    <div className="flex items-center gap-1 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
