import { motion } from "framer-motion";
import { Shield, Leaf, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Organic Fabrics",
    description: "100% organic cotton & eco-friendly materials, gentle on baby's skin",
    gradient: "from-mint/30 to-accent/20",
  },
  {
    icon: Shield,
    title: "Safety Certified",
    description: "Every product tested & certified safe — free from harmful chemicals",
    gradient: "from-baby-blue/30 to-secondary/20",
  },
  {
    icon: Heart,
    title: "Designed with Love",
    description: "Thoughtfully designed by parents, for parents — comfort meets style",
    gradient: "from-peach/30 to-primary/15",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders over Rs. 3,000 with hassle-free returns",
    gradient: "from-lavender/30 to-secondary/20",
  },
];

const WhyTinyVerse = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3 block">Why Parents Love Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">The TinyVerse Promise</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">We believe every child deserves clothing that's safe, comfortable, and absolutely adorable</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <feature.icon className="w-7 h-7 text-foreground/70" />
              </div>
              <h3 className="font-heading font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTinyVerse;
