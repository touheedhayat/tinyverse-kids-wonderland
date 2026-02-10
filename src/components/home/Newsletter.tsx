import { useState } from "react";
import { Send } from "lucide-react";
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
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center rounded-2xl p-8 md:p-12"
          style={{ background: "linear-gradient(135deg, hsl(270, 40%, 90%), hsl(346, 65%, 90%), hsl(200, 65%, 90%))" }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">Join the TinyVerse Family</h2>
          <p className="text-foreground/70 mb-6">Get exclusive offers, new arrivals & styling tips delivered to your inbox</p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-card rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 border border-border"
            />
            <button type="submit" className="bg-foreground text-background px-5 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-medium">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
