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
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Shop by Collection</h2>
          <p className="text-muted-foreground text-sm">Find the perfect outfit for every little explorer</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={`/products?gender=${cat.slug}`} className="block group">
                <div className="aspect-square rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300" style={{ background: cat.gradient }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <motion.span
                      className="text-4xl md:text-5xl mb-3 block"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {icons[cat.slug] || "✨"}
                    </motion.span>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-0.5">{cat.name}</h3>
                    <p className="text-xs text-foreground/50 mb-2">{cat.count} Products</p>
                    <div className="flex items-center gap-1 text-[10px] font-medium text-foreground/60 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
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
