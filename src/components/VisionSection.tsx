import { motion } from "framer-motion";

const pillars = [
    {
        number: "01",
        title: "The Rarest Circle",
        body: "SwapLuxe is not a rental platform. Every member is individually reviewed — we curate for lifestyle, not just liquidity. Fewer than 3% of applicants are admitted.",
    },
    {
        number: "02",
        title: "Frictionless by Design",
        body: "Concierge delivery to your door, full insurance, white-glove handover. No queues, no counters — just the keys and the open road.",
    },
    {
        number: "03",
        title: "A Club, Not a Service",
        body: "Members swap assets, share experiences, and meet through curated events. SwapLuxe is the common thread through India's most discerning garages.",
    },
];

const VisionSection = () => {
    return (
        <section
            id="vision"
            className="py-24 md:py-32 relative overflow-hidden"
        >
            {/* Ambient radial glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            {/* Top divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mb-16 md:mb-20"
                >
                    <p className="text-primary font-accent text-xs tracking-[0.35em] uppercase mb-4">
                        Who We Are
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.15] mb-6">
                        Born from the belief that{" "}
                        <span className="text-gradient-gold">
                            the finest things in life deserve to be shared.
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl font-body">
                        India has a new generation of collectors — entrepreneurs, athletes, artists — who
                        own extraordinary assets but crave the breadth of a wider garage. SwapLuxe was
                        built for them. A private, members-only exchange where trust is the currency and
                        discretion the baseline.
                    </p>
                </motion.div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="glass-card glow-border shimmer-overlay rounded-2xl p-6 md:p-8 flex flex-col gap-4"
                        >
                            <span className="font-accent text-4xl text-primary/30 font-bold leading-none select-none">
                                {pillar.number}
                            </span>
                            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed font-body">
                                {pillar.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative quote */}
                <motion.blockquote
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 md:mt-20 border-l-2 border-primary/40 pl-6 md:pl-8 max-w-2xl"
                >
                    <p className="font-accent text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                        "Ownership is a chapter. Experience is the story."
                    </p>
                    <footer className="mt-3 font-body text-xs tracking-[0.2em] uppercase text-primary/60">
                        — The SwapLuxe Manifesto
                    </footer>
                </motion.blockquote>
            </div>

            {/* Bottom divider */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
};

export default VisionSection;
