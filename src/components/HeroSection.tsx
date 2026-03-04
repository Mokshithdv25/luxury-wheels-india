import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import heroCar from "@/assets/hero-car.jpg";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
      {count}{suffix}
    </span>
  );
};

const floatingBadges = [
  { icon: Shield, label: "Fully Insured", delay: 1.2 },
  { icon: CheckCircle, label: "200-Point Inspected", delay: 1.5 },
  { icon: Star, label: "Verified Owners", delay: 1.8 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={heroCar}
          alt="Luxury sports car"
          className="w-full h-full object-cover scale-110"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Subtle particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary font-accent text-base tracking-[0.2em] uppercase font-medium">
              SwapLuxe · India’s Invite‑Only Swap Club
            </span>
          </motion.div>

          {/* Title — word-by-word stagger */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8">
            {["Swap", "Your"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.64 }}
              className="inline-block text-gradient-gold mr-4"
            >
              Luxury
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.76 }}
              className="inline-block text-gradient-gold"
            >
              Ride
            </motion.span>
            <br />
            {["Across", "India"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.88 + i * 0.12 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-lg"
          >
            Swap your luxury car with other high‑net‑worth members across India — without the usual headache.
            We handle condition checks, insurance, and legal agreements end‑to‑end so you simply exchange keys.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link to="/apply">
              <Button
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-body font-semibold text-base px-10 py-7 shadow-gold-lg pulse-glow hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-300 tracking-wide"
              >
                Start Swapping
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="#how">
              <Button
                size="lg"
                variant="outline"
                className="border-gold-subtle text-foreground font-body text-base px-8 py-7 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 tracking-wide"
              >
                How It Works
              </Button>
            </a>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: badge.delay, duration: 0.5 }}
                className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm font-body"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-10"
          >
            <div className="flex flex-col">
              <AnimatedCounter target={500} suffix="+" />
              <span className="text-muted-foreground font-body text-sm mt-1 tracking-wide">Luxury Cars</span>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="flex flex-col">
              <AnimatedCounter target={12} />
              <span className="text-muted-foreground font-body text-sm mt-1 tracking-wide">Cities</span>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">₹0</span>
              <span className="text-muted-foreground font-body text-sm mt-1 tracking-wide">Damage Liability</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
