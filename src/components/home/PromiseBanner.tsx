import { motion } from "framer-motion";
import { Shield, RotateCcw } from "lucide-react";

const PromiseBanner = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border/50 p-6 md:p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <RotateCcw className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mb-1 font-medium">Our Promise to You:</p>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-1">10-Day Refund Policy</h3>
          <p className="text-sm text-muted-foreground">No questions asked — hassle-free returns on all orders</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseBanner;
