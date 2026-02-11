import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Percent, Sparkles } from "lucide-react";

const SeasonalOffers = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Link to="/products?sale=true" className="block rounded-3xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-all duration-500" style={{ background: "linear-gradient(135deg, hsl(346, 65%, 82%), hsl(20, 80%, 88%))" }}>
              <div className="p-8 md:p-14 min-h-[320px] flex flex-col justify-center relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-card/30 backdrop-blur-sm flex items-center justify-center mb-5">
                  <Percent className="w-6 h-6 text-foreground/70" />
                </div>
                <span className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-[0.2em]">Limited Time</span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Winter Sale</h3>
                <p className="text-foreground/60 mb-6 max-w-xs text-base leading-relaxed">Up to 30% off on warm & cozy essentials for your little ones</p>
                <span className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold w-fit group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  Shop Sale
                </span>
              </div>
              {/* Floating decorations */}
              <motion.div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-card/15 blur-sm" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-card/10 blur-md" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Link to="/products?category=newborn" className="block rounded-3xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-all duration-500" style={{ background: "linear-gradient(135deg, hsl(160, 40%, 82%), hsl(200, 65%, 85%))" }}>
              <div className="p-8 md:p-14 min-h-[320px] flex flex-col justify-center relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-card/30 backdrop-blur-sm flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6 text-foreground/70" />
                </div>
                <span className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-[0.2em]">New Arrivals</span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Newborn Collection</h3>
                <p className="text-foreground/60 mb-6 max-w-xs text-base leading-relaxed">Ultra-soft organic cotton for your newest tiny star</p>
                <span className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold w-fit group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  Explore
                </span>
              </div>
              <motion.div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-card/15 blur-sm" animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
              <motion.div className="absolute bottom-8 right-14 w-28 h-28 rounded-full bg-card/10 blur-md" animate={{ y: [0, -18, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalOffers;
