import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const hotCategories = [
  { name: "Rompers", emoji: "👶", gradient: "linear-gradient(135deg, hsl(346, 65%, 85%), hsl(346, 50%, 78%))", link: "/products?category=Rompers" },
  { name: "Dresses", emoji: "👗", gradient: "linear-gradient(135deg, hsl(270, 40%, 85%), hsl(270, 35%, 78%))", link: "/products?category=Dresses" },
  { name: "Winter Wear", emoji: "🧥", gradient: "linear-gradient(135deg, hsl(200, 65%, 85%), hsl(200, 50%, 78%))", link: "/products?category=Tops" },
  { name: "Sleepwear", emoji: "🌙", gradient: "linear-gradient(135deg, hsl(160, 40%, 85%), hsl(160, 35%, 78%))", link: "/products?category=Sleepwear" },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const activeBanners = banners.filter(b => b.active);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % activeBanners.length), 5000);
    return () => clearInterval(timer);
  }, [activeBanners.length]);

  const banner = activeBanners[current];

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5">
        {/* Main Banner */}
        <div className="relative rounded-2xl overflow-hidden min-h-[360px] md:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={banner.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center"
              style={{ background: banner.gradient }}
            >
              <div className="p-8 md:p-12 max-w-lg relative z-10">
                <span className="inline-block bg-card/30 backdrop-blur-sm text-foreground/80 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
                  Live Now
                </span>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
                  {banner.title}
                </h1>
                <p className="text-foreground/60 mb-6 text-sm md:text-base max-w-sm">
                  {banner.subtitle}
                </p>
                <Link
                  to={banner.ctaLink}
                  className="inline-block bg-foreground text-background px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {banner.cta}
                </Link>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-card/10 blur-2xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-card/8 blur-xl" />
            </motion.div>
          </AnimatePresence>

          {/* Banner controls */}
          <button onClick={() => setCurrent(c => (c - 1 + activeBanners.length) % activeBanners.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-all z-20">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => setCurrent(c => (c + 1) % activeBanners.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-all z-20">
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {activeBanners.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-400 ${i === current ? "bg-foreground w-7" : "bg-foreground/30 w-2"}`} />
            ))}
          </div>
        </div>

        {/* Hot Categories Sidebar */}
        <div className="hidden lg:block">
          <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-center mb-4 text-muted-foreground">
            🔥 Selling Hot Right Now
          </h3>
          <div className="grid grid-cols-2 gap-3 h-[calc(100%-40px)]">
            {hotCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={cat.link}
                  className="block rounded-xl overflow-hidden h-full min-h-[110px] relative group hover:shadow-lg transition-all duration-300"
                  style={{ background: cat.gradient }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.emoji}</span>
                    <span className="font-heading font-bold text-sm text-foreground">{cat.name}</span>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile hot categories */}
      <div className="grid grid-cols-4 gap-3 mt-4 lg:hidden">
        {hotCategories.map(cat => (
          <Link
            key={cat.name}
            to={cat.link}
            className="rounded-xl p-3 text-center hover:shadow-md transition-all"
            style={{ background: cat.gradient }}
          >
            <span className="text-2xl block mb-1">{cat.emoji}</span>
            <span className="text-[11px] font-bold font-heading">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
