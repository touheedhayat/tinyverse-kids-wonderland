import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import TrendingProducts from "@/components/home/TrendingProducts";
import SeasonalOffers from "@/components/home/SeasonalOffers";
import BestSellers from "@/components/home/BestSellers";
import CustomerReviews from "@/components/home/CustomerReviews";
import Newsletter from "@/components/home/Newsletter";
import InstagramGallery from "@/components/home/InstagramGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedCollections />
        <TrendingProducts />
        <SeasonalOffers />
        <BestSellers />
        <CustomerReviews />
        <Newsletter />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
