import FlashSale from "@/components/ui/HomePage/FlashSale/FlashSale";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import TopCategories from "@/components/ui/HomePage/TopCategories/TopCategories";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <TopCategories />
    </div>
  );
};

export default HomePage;
