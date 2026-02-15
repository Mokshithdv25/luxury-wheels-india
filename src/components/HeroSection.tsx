import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCar} alt="Luxury sports car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase">
              Insured & Guaranteed
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Swap Your{" "}
            <span className="text-gradient-gold">Luxury Ride</span>
            <br />
            Across India
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-lg">
            Experience the thrill of a new supercar every weekend. Fully inspected, legally secured, and comprehensively insured swaps between verified owners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground font-body font-semibold text-base px-8 py-6 shadow-gold hover:opacity-90 transition-opacity">
              Start Swapping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground font-body text-base px-8 py-6 hover:bg-secondary">
              How It Works
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 text-muted-foreground font-body text-sm">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span>Luxury Cars</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">12</span>
              <span>Cities</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">₹0</span>
              <span>Damage Liability</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
