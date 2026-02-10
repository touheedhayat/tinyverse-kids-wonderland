import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";

const FeaturedCollections = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Shop by Collection</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Find the perfect outfit for every little explorer in your life</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={`/products?gender=${cat.slug}`} className="block group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative" style={{ background: cat.gradient }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <span className="text-5xl mb-3">{cat.slug === "boys" ? "👦" : cat.slug === "girls" ? "👧" : cat.slug === "newborn" ? "👶" : "🌸"}</span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">{cat.name}</h3>
                    <p className="text-sm text-foreground/60">{cat.count} Products</p>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
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
