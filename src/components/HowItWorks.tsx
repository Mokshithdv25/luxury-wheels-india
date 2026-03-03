import { motion } from "framer-motion";
import { ClipboardCheck, Search, ArrowLeftRight, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "List Your Car",
    description:
      "Apply to SwapLuxe, verify your profile, and list your car with service history, documents, and preferences.",
  },
  {
    icon: Search,
    title: "We Curate Your Match",
    description: "Our concierge team shortlists compatible cars from within an invite‑only high‑net‑worth community.",
  },
  {
    icon: ShieldCheck,
    title: "Condition, Insurance, Legal",
    description:
      "Independent inspections, upgraded insurance, and airtight digital agreements — all handled for you.",
  },
  {
    icon: ArrowLeftRight,
    title: "Swap & Enjoy",
    description:
      "Keys change hands only after everything is cleared. You enjoy the car; we stay on‑call throughout your swap.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
              Simple Process
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12%] right-[12%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="w-full h-full origin-left"
              style={{
                background: "linear-gradient(90deg, hsl(43 85% 58% / 0.4), hsl(43 85% 58% / 0.15), hsl(43 85% 58% / 0.4))",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="glass-card rounded-xl p-8 h-full hover:border-primary/30 transition-all duration-500 hover:shadow-gold hover:-translate-y-1">
                  {/* Step number badge */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="absolute inset-[2px] rounded-full bg-card flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Ring glow on hover */}
                    <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
                  </div>

                  <span className="text-primary/60 font-accent text-xs font-bold tracking-[0.3em] uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-display font-semibold mt-2 mb-3 group-hover:text-gradient-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
