import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { banners } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

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
          className="min-h-[75vh] md:min-h-[85vh] flex items-center justify-center relative"
          style={{ background: banner.gradient }}
        >
          {/* Floating decorative shapes */}
          <FloatingShape className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-primary/10 blur-sm" delay={0} />
          <FloatingShape className="absolute top-[20%] right-[10%] w-16 h-16 rounded-2xl bg-secondary/20 blur-sm rotate-45" delay={1} />
          <FloatingShape className="absolute bottom-[25%] left-[15%] w-12 h-12 rounded-full bg-accent/15 blur-sm" delay={2} />
          <FloatingShape className="absolute bottom-[15%] right-[8%] w-24 h-24 rounded-full bg-primary/8 blur-md" delay={0.5} />
          <FloatingShape className="absolute top-[40%] left-[8%] w-8 h-8 rounded-full bg-lavender/30" delay={1.5} />
          <FloatingShape className="absolute top-[60%] right-[15%] w-10 h-10 rounded-full bg-mint/25" delay={3} />

          {/* Sparkle particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 18}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
          ))}

          <div className="text-center px-6 max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-md border border-card/30 rounded-full px-5 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground/80 tracking-wide uppercase">New Collection 2026</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight"
            >
              {banner.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-foreground/60 mb-10 max-w-lg mx-auto font-light"
            >
              {banner.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <Link
                to={banner.ctaLink}
                className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-heading font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm md:text-base"
              >
                {banner.cta}
              </Link>
              <Link
                to="/products"
                className="inline-block bg-card/50 backdrop-blur-sm text-foreground border border-border/50 px-8 py-4 rounded-full font-heading font-medium hover:bg-card/80 transition-all duration-300 text-sm md:text-base"
              >
                Browse All
              </Link>
            </motion.div>
          </div>

          {/* Large decorative blurred circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button onClick={() => setCurrent(c => (c - 1 + activeBanners.length) % activeBanners.length)} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/40 backdrop-blur-md border border-card/30 flex items-center justify-center hover:bg-card/70 transition-all z-20 shadow-lg">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => setCurrent(c => (c + 1) % activeBanners.length)} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/40 backdrop-blur-md border border-card/30 flex items-center justify-center hover:bg-card/70 transition-all z-20 shadow-lg">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {activeBanners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? "bg-foreground w-10" : "bg-foreground/25 w-2.5 hover:bg-foreground/40"}`} />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroBanner;
