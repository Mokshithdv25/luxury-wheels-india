import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import FeaturedCars from "@/components/FeaturedCars";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FutureCategories from "@/components/FutureCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      <Navbar />
      <HeroSection />
      <div id="vision"><VisionSection /></div>
      <div id="how"><HowItWorks /></div>
      <div id="trust"><TrustSection /></div>
      <div id="cars"><FeaturedCars /></div>
      <TestimonialsMarquee />
      <div id="future"><FutureCategories /></div>
      <Footer />
    </div>
  );
};

export default Index;
