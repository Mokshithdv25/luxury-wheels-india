import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LuxuryCTA = () => {
    return (
        <section className="py-28 relative overflow-hidden">
            {/* Large background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-[250px]" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="glass-card rounded-3xl p-10 md:p-20 text-center relative overflow-hidden"
                >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-primary/20 rounded-tl-3xl" />
                    <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-primary/20 rounded-tr-3xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/20 rounded-bl-3xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-primary/20 rounded-br-3xl" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">
                            Exclusive Membership
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
                    >
                        Experience the{" "}
                        <span className="text-gradient-gold">Pinnacle</span>
                        <br />
                        of Automotive Luxury
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Become part of SwapLuxe — an invite‑only club that lets you rotate between exceptional cars today,
                        and soon, watches, yachts, and private jets. One membership, endless ways to live your luxury.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/apply">
                            <Button
                                size="lg"
                                className="bg-gradient-gold text-primary-foreground font-body font-semibold text-base px-12 py-7 shadow-gold-lg pulse-glow hover:scale-[1.03] transition-all duration-300 tracking-wide"
                            >
                                Join SwapLuxe
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-gold-subtle text-foreground font-body text-base px-8 py-7 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 tracking-wide"
                        >
                            Schedule a Call
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="text-muted-foreground/50 font-accent text-sm mt-8 tracking-widest uppercase"
                    >
                        By Invitation & Application Only · India First, Global Next
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default LuxuryCTA;
