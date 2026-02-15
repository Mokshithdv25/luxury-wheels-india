import { motion } from "framer-motion";
import { MapPin, Gauge, Star } from "lucide-react";
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
  },
  {
    image: car2,
    name: "Porsche 911 Turbo S",
    location: "Delhi NCR",
    power: "640 HP",
    rating: 4.8,
    owner: "Priya K.",
    swapValue: "1–6 months",
  },
  {
    image: car3,
    name: "Mercedes AMG GT",
    location: "Bangalore",
    power: "577 HP",
    rating: 4.7,
    owner: "Arjun S.",
    swapValue: "2–4 months",
  },
];

const FeaturedCars = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Available Now
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient-gold">Swaps</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-md px-3 py-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span className="text-sm font-body font-semibold">{car.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{car.name}</h3>
                <div className="flex items-center gap-4 text-muted-foreground font-body text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {car.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5" /> {car.power}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-primary font-body font-bold text-sm">{car.swapValue}</span>
                    <p className="text-muted-foreground text-xs font-body">Owner: {car.owner}</p>
                  </div>
                  <Button size="sm" className="bg-gradient-gold text-primary-foreground font-body font-semibold hover:opacity-90">
                    View Details
                  </Button>
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
