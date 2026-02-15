import { motion } from "framer-motion";
import { Shield, FileCheck, Eye, Banknote, Scale, HeartHandshake } from "lucide-react";

const badges = [
  { icon: Shield, title: "Comprehensive Insurance", desc: "Every swap is backed by full bumper-to-bumper insurance coverage." },
  { icon: Eye, title: "200-Point Inspection", desc: "Certified mechanics perform thorough inspections before every swap." },
  { icon: FileCheck, title: "Legal Agreements", desc: "Digital contracts with Aadhaar e-sign, legally binding and court-admissible." },
  { icon: Banknote, title: "Security Deposit", desc: "Refundable deposits protect both parties against unforeseen damages." },
  { icon: Scale, title: "Dispute Resolution", desc: "Dedicated arbitration panel for quick and fair conflict resolution." },
  { icon: HeartHandshake, title: "Verified Community", desc: "Every member is KYC-verified with background checks and references." },
];

const TrustSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Your Safety, Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Built on <span className="text-gradient-gold">Trust</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{badge.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
