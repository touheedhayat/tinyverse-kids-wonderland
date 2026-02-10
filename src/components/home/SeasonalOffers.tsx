import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SeasonalOffers = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link to="/products?sale=true" className="block rounded-2xl overflow-hidden relative group" style={{ background: "linear-gradient(135deg, hsl(346, 65%, 82%), hsl(20, 80%, 88%))" }}>
              <div className="p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
                <span className="text-sm font-medium text-foreground/60 mb-2 uppercase tracking-wider">Limited Time</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Winter Sale</h3>
                <p className="text-foreground/70 mb-4 max-w-xs">Up to 30% off on warm & cozy essentials for your little ones</p>
                <span className="inline-block bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium w-fit group-hover:opacity-90 transition-opacity">Shop Sale</span>
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link to="/products?category=newborn" className="block rounded-2xl overflow-hidden relative group" style={{ background: "linear-gradient(135deg, hsl(160, 40%, 82%), hsl(200, 65%, 85%))" }}>
              <div className="p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
                <span className="text-sm font-medium text-foreground/60 mb-2 uppercase tracking-wider">New Arrivals</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Newborn Collection</h3>
                <p className="text-foreground/70 mb-4 max-w-xs">Ultra-soft organic cotton for your newest tiny star</p>
                <span className="inline-block bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium w-fit group-hover:opacity-90 transition-opacity">Explore</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalOffers;
