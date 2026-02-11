import { reviews } from "@/data/products";
import { Star, Quote, Heart } from "lucide-react";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What Parents Say</h2>
          <p className="text-muted-foreground">Real love from real families</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-xl transition-all duration-500 relative group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40" />
              <Quote className="w-10 h-10 text-primary/15 mb-4" />
              <p className="text-sm text-foreground/75 leading-relaxed mb-5 italic">"{review.comment}"</p>
              <div className="flex items-center gap-1.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < review.rating ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center text-sm font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{review.customerName}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
