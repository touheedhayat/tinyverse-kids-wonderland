import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const activeBanners = banners.filter(b => b.active);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % activeBanners.length), 5000);
    return () => clearInterval(timer);
  }, [activeBanners.length]);

  const banner = activeBanners[current];

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={banner.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center relative"
          style={{ background: banner.gradient }}
        >
          <div className="text-center px-6 max-w-2xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight"
            >
              {banner.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg mx-auto"
            >
              {banner.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to={banner.ctaLink} className="inline-block bg-foreground text-background px-8 py-3.5 rounded-full font-heading font-semibold hover:opacity-90 transition-opacity shadow-lg">
                {banner.cta}
              </Link>
            </motion.div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-card/10 blur-xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-card/10 blur-2xl" />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button onClick={() => setCurrent(c => (c - 1 + activeBanners.length) % activeBanners.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors z-20">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => setCurrent(c => (c + 1) % activeBanners.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors z-20">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {activeBanners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-foreground w-8" : "bg-foreground/30"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
