import { motion } from "framer-motion";
import { ClipboardCheck, Search, ArrowLeftRight, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "List Your Car",
    description: "Register your luxury vehicle with photos, documents, and inspection details.",
  },
  {
    icon: Search,
    title: "Find a Match",
    description: "Browse verified cars from trusted owners across 12 major Indian cities.",
  },
  {
    icon: ShieldCheck,
    title: "Inspect & Insure",
    description: "Our certified mechanics inspect both cars. Full insurance coverage kicks in.",
  },
  {
    icon: ArrowLeftRight,
    title: "Swap & Enjoy",
    description: "Sign the digital agreement, exchange keys, and hit the road with confidence.",
  },
];

const HowItWorks = () => {
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
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-muted-foreground font-body text-xs font-bold tracking-widest uppercase">
                  Step {i + 1}
                </span>
                <h3 className="text-xl font-display font-semibold mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
