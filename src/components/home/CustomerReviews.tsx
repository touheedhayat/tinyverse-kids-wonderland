import { reviews } from "@/data/products";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">What Parents Say</h2>
          <p className="text-muted-foreground">Real love from real families</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div key={review.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{review.comment}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-3.5 h-3.5 ${j < review.rating ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.customerName}</p>
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
