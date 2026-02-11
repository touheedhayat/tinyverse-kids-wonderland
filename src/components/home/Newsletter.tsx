import { useState } from "react";
import { Send, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast({ title: "Subscribed! ✨", description: "Welcome to the TinyVerse family!" });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(135deg, hsl(270, 40%, 90%), hsl(346, 65%, 90%), hsl(200, 65%, 90%))" }}
        >
          {/* Floating decorative shapes */}
          <motion.div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-card/15 blur-sm" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-card/10 blur-md" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
          <motion.div className="absolute top-1/2 right-8 w-10 h-10 rounded-full bg-primary/10" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-card/40 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-foreground/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Join the TinyVerse Family</h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto text-base leading-relaxed">Get exclusive offers, new arrivals & styling tips delivered to your inbox</p>
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 border border-border/50 shadow-sm"
              />
              <button type="submit" className="bg-foreground text-background px-6 py-3.5 rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm font-semibold shadow-lg">
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
            <p className="text-xs text-foreground/40 mt-4 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" /> No spam, unsubscribe anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
