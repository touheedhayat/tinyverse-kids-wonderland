import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrendingProducts = () => {
  const trending = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">What everyone's loving this season</p>
          </div>
          <Link to="/products" className="hidden md:block text-sm font-medium text-primary hover:underline">View All →</Link>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trending.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">View All Products →</Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
