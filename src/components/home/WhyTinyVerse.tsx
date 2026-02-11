import { motion } from "framer-motion";
import { Award, Truck, Heart } from "lucide-react";

const promises = [
  { icon: Award, title: "Quality", subtitle: "Focused", gradient: "from-primary/15 to-peach/20" },
  { icon: Truck, title: "Fast", subtitle: "Shipping", gradient: "from-baby-blue/20 to-secondary/15" },
  { icon: Heart, title: "50,000+", subtitle: "Happy Customers", gradient: "from-mint/20 to-accent/15" },
];

const WhyTinyVerse = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-bold text-center mb-8"
        >
          The TinyVerse Promise
        </motion.h2>
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {promises.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-foreground/70" />
              </div>
              <h4 className="font-heading font-bold text-sm md:text-base">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTinyVerse;
