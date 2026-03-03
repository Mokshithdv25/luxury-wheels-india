import { motion } from "framer-motion";
import { Shield, FileCheck, Eye, Banknote, Scale, HeartHandshake } from "lucide-react";
import { useRef, useCallback } from "react";

const badges = [
  {
    icon: Shield,
    title: "Fully Managed Risk",
    desc: "Comprehensive insurance, usage restrictions, and clear responsibilities so you never worry about 'what if'.",
  },
  {
    icon: Eye,
    title: "Condition Guaranteed",
    desc: "Independent 200‑point inspections and pre‑swap reports for every vehicle in the club.",
  },
  {
    icon: FileCheck,
    title: "Tight Legal Framework",
    desc: "Custom swap agreements, Aadhaar e‑sign, and compliant documentation built for Indian regulations.",
  },
  {
    icon: Banknote,
    title: "Aligned Incentives",
    desc: "Smart security deposits and clear penalty slabs to keep everyone honest and protected.",
  },
  {
    icon: Scale,
    title: "White‑Glove Resolution",
    desc: "Concierge support and structured arbitration for the rare case something does go wrong.",
  },
  {
    icon: HeartHandshake,
    title: "Invite‑Only HNI Circle",
    desc: "KYC, income, and reference checks so you swap only within a trusted, high‑net‑worth community.",
  },
];

const SpotlightCard = ({
  badge,
  i,
  isLarge,
}: {
  badge: (typeof badges)[0];
  i: number;
  isLarge: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className={`spotlight-hover glass-card rounded-xl ${isLarge ? "p-8 md:p-10" : "p-6 md:p-8"
        } hover:border-primary/25 transition-all duration-500 hover:shadow-gold hover:-translate-y-1 group`}
    >
      <div className="relative z-10 flex gap-5">
        <div
          className={`${isLarge ? "w-14 h-14" : "w-12 h-12"
            } rounded-full bg-gradient-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-gold/20 transition-all duration-500`}
        >
          <badge.icon
            className={`${isLarge ? "w-7 h-7" : "w-6 h-6"
              } text-primary group-hover:scale-110 transition-transform duration-300`}
          />
        </div>
        <div>
          <h3
            className={`font-display font-semibold ${isLarge ? "text-xl md:text-2xl" : "text-lg"
              } mb-2`}
          >
            {badge.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {badge.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TrustSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

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
              Your Safety, Our Promise
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Built on <span className="text-gradient-gold">Trust</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First two large */}
          {badges.slice(0, 2).map((badge, i) => (
            <SpotlightCard key={badge.title} badge={badge} i={i} isLarge={true} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {/* Last four smaller */}
          {badges.slice(2).map((badge, i) => (
            <SpotlightCard key={badge.title} badge={badge} i={i + 2} isLarge={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
