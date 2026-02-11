import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import HeroBanner from "@/components/home/HeroBanner";
import PromiseBanner from "@/components/home/PromiseBanner";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import TrendingProducts from "@/components/home/TrendingProducts";
import WhyTinyVerse from "@/components/home/WhyTinyVerse";
import CuratedForThem from "@/components/home/CuratedForThem";
import PromoBanners from "@/components/home/PromoBanners";
import ShopByAge from "@/components/home/ShopByAge";
import BestSellers from "@/components/home/BestSellers";
import CustomerReviews from "@/components/home/CustomerReviews";
import Newsletter from "@/components/home/Newsletter";
import InstagramGallery from "@/components/home/InstagramGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroBanner />
        <PromiseBanner />
        <FeaturedCollections />
        <WhyTinyVerse />
        <CuratedForThem />
        <TrendingProducts />
        <PromoBanners />
        <ShopByAge />
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
