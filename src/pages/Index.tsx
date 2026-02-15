import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="how"><HowItWorks /></div>
      <div id="trust"><TrustSection /></div>
      <div id="cars"><FeaturedCars /></div>
      <Footer />
    </div>
  );
};

export default Index;
