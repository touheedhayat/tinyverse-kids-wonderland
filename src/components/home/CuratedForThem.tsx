import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const collections = [
  { name: "Newborn Apparel", emoji: "👶", gradient: "linear-gradient(135deg, hsl(160, 40%, 82%), hsl(160, 35%, 72%))", link: "/products?category=newborn" },
  { name: "Boys Apparel", emoji: "👦", gradient: "linear-gradient(135deg, hsl(200, 65%, 82%), hsl(200, 50%, 72%))", link: "/products?gender=boys" },
  { name: "Girls Apparel", emoji: "👧", gradient: "linear-gradient(135deg, hsl(346, 65%, 82%), hsl(346, 50%, 72%))", link: "/products?gender=girls" },
];

const CuratedForThem = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Curated for Them</h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={col.link}
                className="block rounded-2xl overflow-hidden aspect-[3/4] relative group hover:shadow-xl transition-all duration-300"
                style={{ background: col.gradient }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform">{col.emoji}</span>
                  <h3 className="font-heading font-bold text-sm md:text-lg text-foreground">{col.name}</h3>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedForThem;
