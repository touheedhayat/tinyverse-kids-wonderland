import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">@tinyverse.pk</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">Follow Our Journey</h2>
          <p className="text-muted-foreground">Join 15K+ parents in our community</p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {gradients.map((bg, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="aspect-square rounded-2xl overflow-hidden group relative shadow-sm hover:shadow-xl transition-shadow duration-500"
              style={{ background: bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-foreground/8 text-4xl font-heading font-bold">✨</div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300 flex items-center justify-center gap-3">
                <Instagram className="w-5 h-5 text-card opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                <ExternalLink className="w-4 h-4 text-card opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 delay-75" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
