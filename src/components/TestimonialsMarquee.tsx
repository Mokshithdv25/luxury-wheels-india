import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Vikram Mehta",
        city: "Mumbai",
        text: "Swapped my Porsche 718 for a Ferrari Roma in Delhi. The process was seamless — inspection, insurance, everything handled beautifully.",
        rating: 5,
        car: "Porsche 718 → Ferrari Roma",
    },
    {
        name: "Ananya Sharma",
        city: "Bangalore",
        text: "As a woman in the luxury car space, I was hesitant. SwapLuxe's verification and legal framework gave me complete confidence. Absolutely five-star experience.",
        rating: 5,
        car: "BMW M4 → Audi RS5",
    },
    {
        name: "Rajan Krishnan",
        city: "Chennai",
        text: "The legal framework is rock-solid. Digital contracts with Aadhaar e-sign — I felt completely protected. My Merc AMG for a Maserati? Worth every moment.",
        rating: 5,
        car: "Mercedes AMG → Maserati GranTurismo",
    },
    {
        name: "Kavitha Reddy",
        city: "Hyderabad",
        text: "SwapLuxe feels like a private members' club for India’s HNIs. The 200-point inspection report was incredibly thorough.",
        rating: 5,
        car: "Range Rover → Bentley Bentayga",
    },
    {
        name: "Arjun Patel",
        city: "Delhi NCR",
        text: "Tried three other platforms before SwapLuxe. Nothing compares. The managed insurance and legal alone make it the only real choice for serious collectors.",
        rating: 5,
        car: "Lamborghini Huracán → McLaren 720S",
    },
    {
        name: "Priya Nair",
        city: "Kochi",
        text: "Drove a Rolls-Royce Ghost for two months while my Aston Martin was with a wonderful owner in Mumbai. Pure magic. SwapLuxe is outstanding.",
        rating: 5,
        car: "Aston Martin DB11 → Rolls-Royce Ghost",
    },
];

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
    <div className="glass-card rounded-xl p-6 md:p-8 min-w-[340px] md:min-w-[420px] mx-3 flex flex-col justify-between group hover:border-primary/20 transition-all duration-500">
        <div>
            <Quote className="w-6 h-6 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
            <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4">
                "{item.text}"
            </p>
        </div>
        <div>
            <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                ))}
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-display font-semibold text-sm">{item.name}</p>
                    <p className="text-muted-foreground font-body text-xs">{item.city}</p>
                </div>
                <span className="text-primary/60 font-accent text-xs italic">
                    {item.car}
                </span>
            </div>
        </div>
    </div>
);

const TestimonialsMarquee = () => {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="container mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/50" />
                        <span className="text-primary font-accent text-base tracking-[0.2em] uppercase font-medium">
                            What Our Members Say
                        </span>
                        <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold">
                        Trusted by <span className="text-gradient-gold">Enthusiasts</span>
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex" style={{ animation: "marquee 40s linear infinite" }}>
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={`row1-${i}`} item={item} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 — reversed */}
            <div className="relative mt-5">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div
                    className="flex"
                    style={{ animation: "marquee 45s linear infinite reverse" }}
                >
                    {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map(
                        (item, i) => (
                            <TestimonialCard key={`row2-${i}`} item={item} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsMarquee;
