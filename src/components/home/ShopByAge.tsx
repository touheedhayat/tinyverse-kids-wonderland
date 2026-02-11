import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Baby, User } from "lucide-react";

const ageRanges = [
  { label: "0-3", unit: "Months", icon: Baby, link: "/products?age=0-6+months" },
  { label: "3-6", unit: "Months", icon: Baby, link: "/products?age=0-6+months" },
  { label: "6-12", unit: "Months", icon: Baby, link: "/products?age=6-12+months" },
  { label: "1-2", unit: "Years", icon: User, link: "/products?age=1-2+years" },
  { label: "2-3", unit: "Years", icon: User, link: "/products?age=2-3+years" },
  { label: "3-4", unit: "Years", icon: User, link: "/products?age=3-5+years" },
  { label: "4-5", unit: "Years", icon: User, link: "/products?age=3-5+years" },
];

const ShopByAge = () => {
  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">Shop by Age</h2>
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide justify-center flex-wrap">
          {ageRanges.map((age, i) => (
            <motion.div
              key={age.label + age.unit}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={age.link}
                className="flex flex-col items-center w-20 md:w-24 py-4 px-2 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <age.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-bold text-sm">{age.label}</span>
                <span className="text-[10px] text-muted-foreground">{age.unit}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByAge;
