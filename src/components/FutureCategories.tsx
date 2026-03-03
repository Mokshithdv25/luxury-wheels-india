import { motion } from "framer-motion";
import { CarFront, Watch, Ship, Plane } from "lucide-react";

const items = [
  {
    icon: CarFront,
    label: "Supercars & SUVs",
    caption: "Live now across India",
  },
  {
    icon: Watch,
    label: "Haute Horlogerie",
    caption: "Collector watches coming soon",
  },
  {
    icon: Ship,
    label: "Yachts",
    caption: "Curated marinas & crews",
  },
  {
    icon: Plane,
    label: "Jets",
    caption: "Private aviation partnerships",
  },
];

const FutureCategories = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-primary font-accent text-xs tracking-[0.35em] uppercase mb-3">
            Today Cars · Tomorrow More
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold">
            One SwapLuxe membership,{" "}
            <span className="text-gradient-gold">many assets to experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="glass-card rounded-2xl p-4 md:p-5 flex flex-col items-start gap-3"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-gold/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display text-sm md:text-base text-foreground">{item.label}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1">{item.caption}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureCategories;

