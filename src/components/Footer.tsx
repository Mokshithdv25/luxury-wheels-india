import { motion } from "framer-motion";
import { Crown, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Platform",
    links: ["Browse Cars", "List Your Car", "Pricing", "How It Works"],
  },
  {
    title: "Trust",
    links: ["Insurance Policy", "Inspection Process", "Legal Framework", "Dispute Resolution"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Gold gradient divider */}
      <div className="gold-divider mb-16" />

      <div className="container relative z-10">
        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Stay in the <span className="text-gradient-gold">Fast Lane</span>
          </h3>
          <p className="text-muted-foreground font-body text-sm mb-6 max-w-md mx-auto">
            Get exclusive access to new luxury listings, swap tips, and member-only events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 glass-card-strong rounded-lg px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
            <Button className="bg-gradient-gold text-primary-foreground font-body font-semibold hover:opacity-90 shadow-gold px-6">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-primary" />
              <span className="font-display text-2xl font-bold text-gradient-gold">
                SwapLuxe
              </span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 max-w-sm">
              India’s invite‑only swap club for high‑net‑worth collectors. Fully managed condition checks, insurance,
              and legal so you swap without the headache.
            </p>

            {/* Social links with hover glow */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-gold transition-all duration-300 hover:border-primary/30"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-5 text-foreground tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-300 hover-underline-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-muted-foreground font-body text-xs">
              © 2026 SwapLuxe. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-muted-foreground/50 font-accent text-xs tracking-widest uppercase">
              Member of Luxury Auto Alliance
            </span>
            <div className="w-px h-4 bg-border" />
            <div className="flex gap-6 text-muted-foreground font-body text-xs">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
