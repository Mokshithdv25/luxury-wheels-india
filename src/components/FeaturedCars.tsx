import { motion } from "framer-motion";
import { MapPin, Gauge, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import car1 from "@/assets/car1.jpg";
import car2 from "@/assets/car2.jpg";
import car3 from "@/assets/car3.jpg";

const cars = [
  {
    image: car1,
    name: "Ferrari F8 Tributo",
    location: "Mumbai",
    power: "710 HP",
    rating: 4.9,
    owner: "Rajesh M.",
    swapValue: "1–3 months",
    badge: "Top Pick",
  },
  {
    image: car2,
    name: "Porsche 911 Turbo S",
    location: "Delhi NCR",
    power: "640 HP",
    rating: 4.8,
    owner: "Priya K.",
    swapValue: "1–6 months",
    badge: "New",
  },
  {
    image: car3,
    name: "Mercedes AMG GT",
    location: "Bangalore",
    power: "577 HP",
    rating: 4.7,
    owner: "Arjun S.",
    swapValue: "2–4 months",
    badge: "Verified",
  },
];

const FeaturedCars = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary font-accent text-base tracking-[0.2em] uppercase font-medium">
              Available Now
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Featured <span className="text-gradient-gold">Swaps</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Card with shimmer */}
              <div className="shimmer-overlay glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-gold-lg hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Dark overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                    <span className="text-sm font-body font-semibold text-foreground">{car.rating}</span>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 bg-gradient-gold rounded-full px-3 py-1 text-primary-foreground text-xs font-body font-bold tracking-wider uppercase">
                    {car.badge}
                  </div>

                  {/* Car name overlay at bottom of image */}
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-display font-bold text-foreground drop-shadow-lg">
                      {car.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 pt-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center gap-1.5 text-muted-foreground font-body text-sm glass-card rounded-full px-3 py-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {car.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground font-body text-sm glass-card rounded-full px-3 py-1">
                      <Gauge className="w-3.5 h-3.5 text-primary" />
                      {car.power}
                    </span>
                  </div>

                  <div className="gold-divider mb-5" />

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-primary font-accent font-bold text-lg">
                        {car.swapValue}
                      </span>
                      <p className="text-muted-foreground text-xs font-body mt-0.5">
                        Owner: {car.owner}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-gold text-primary-foreground font-body font-semibold hover:opacity-90 shadow-gold group/btn hover:scale-[1.03] transition-all duration-300 px-5"
                    >
                      View Details
                      <ArrowRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
