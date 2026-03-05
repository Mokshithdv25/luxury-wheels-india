import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const items = [
  {
    label: "Supercars & SUVs",
    caption: "Live now across India",
    status: "live" as const,
    img: "/asset-supercar.png",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Villas & Retreats",
    caption: "Signature homes and villas — coming soon",
    status: "soon" as const,
    img: "/asset-villa.png",
    span: "",
  },
  {
    label: "Yachts",
    caption: "Curated marinas and crews — coming soon",
    status: "soon" as const,
    img: "/asset-yacht.png",
    span: "",
  },
  {
    label: "Watches & Horology",
    caption: "Collector watches and trading — coming soon",
    status: "soon" as const,
    img: "/asset-watch.png",
    span: "",
  },
  {
    label: "Jets",
    caption: "Private aviation partnerships — coming soon",
    status: "soon" as const,
    img: "/asset-jet.png",
    span: "",
  },
];

const FutureCategories = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="future">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-accent text-xs tracking-[0.35em] uppercase mb-3">
            Today Cars · Tomorrow More
          </p>
          <h2 className="text-2xl md:text-4xl font-display font-bold">
            One SwapLuxe membership,{" "}
            <span className="text-gradient-gold">many assets to experience</span>
          </h2>
        </motion.div>

        {/* Magazine grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${item.span}`}
            >
              {/* Photo */}
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/0 group-hover:ring-primary/40 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                {/* Badge */}
                {item.status === "live" ? (
                  <span className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-[10px] font-body font-semibold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Live Now
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/60 text-[10px] font-body tracking-widest uppercase">
                    <Sparkles className="w-3 h-3" />
                    Coming Soon
                  </span>
                )}

                <h3 className="font-display text-white font-semibold text-base md:text-xl leading-tight">
                  {item.label}
                </h3>
                <p className="font-body text-white/60 text-xs md:text-sm mt-1 leading-snug">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default FutureCategories;
