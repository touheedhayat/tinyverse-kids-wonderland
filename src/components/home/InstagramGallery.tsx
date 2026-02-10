import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const gradients = [
  "linear-gradient(135deg, hsl(346, 65%, 85%), hsl(346, 50%, 78%))",
  "linear-gradient(135deg, hsl(200, 65%, 85%), hsl(200, 50%, 78%))",
  "linear-gradient(135deg, hsl(160, 40%, 85%), hsl(160, 40%, 75%))",
  "linear-gradient(135deg, hsl(270, 40%, 88%), hsl(270, 35%, 80%))",
  "linear-gradient(135deg, hsl(40, 50%, 88%), hsl(20, 80%, 85%))",
  "linear-gradient(135deg, hsl(346, 50%, 82%), hsl(270, 40%, 85%))",
];

const InstagramGallery = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">@tinyverse.pk</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Follow Our Journey</h2>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {gradients.map((bg, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square rounded-xl overflow-hidden group relative"
              style={{ background: bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-foreground/10 text-3xl font-heading font-bold">✨</div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                <Instagram className="w-6 h-6 text-card opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
