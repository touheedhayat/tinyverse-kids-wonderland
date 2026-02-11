import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const banners = [
  {
    title: "Clearance Sale",
    subtitle: "Up to 40% Off — Limited Stock!",
    gradient: "linear-gradient(135deg, hsl(346, 65%, 80%), hsl(20, 80%, 85%))",
    link: "/products?sale=true",
    span: "col-span-2",
  },
  {
    title: "Tropical Collection",
    subtitle: "Bright & fun outfits for sunny days",
    gradient: "linear-gradient(135deg, hsl(160, 40%, 80%), hsl(40, 60%, 88%))",
    link: "/products",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Winter Outfits",
    subtitle: "Warm & cozy essentials",
    gradient: "linear-gradient(135deg, hsl(200, 65%, 82%), hsl(270, 40%, 85%))",
    link: "/products?category=Tops",
    span: "col-span-2",
  },
];

const PromoBanners = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 md:gap-5" style={{ gridAutoRows: "160px" }}>
          {banners.map((banner, i) => (
            <motion.div
              key={banner.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={banner.span}
            >
              <Link
                to={banner.link}
                className="block rounded-2xl overflow-hidden h-full relative group hover:shadow-xl transition-all duration-300"
                style={{ background: banner.gradient }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                  <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1">{banner.title}</h3>
                  <p className="text-xs md:text-sm text-foreground/60">{banner.subtitle}</p>
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

export default PromoBanners;
