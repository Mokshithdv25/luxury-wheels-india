import { motion } from "framer-motion";
import { Crown, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Apply to Join", href: "/apply" },
      { label: "How It Works", href: "#how" },
      { label: "Future Assets", href: "#future" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Insurance Policy", href: "#" },
      { label: "Inspection Process", href: "#" },
      { label: "Legal Framework", href: "#" },
      { label: "Dispute Resolution", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
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
                {col.links.map((link) => {
                  const href = link.href;
                  const label = link.label;
                  const className =
                    "text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-300 hover-underline-gold";
                  return (
                    <li key={label}>
                      {href.startsWith("/") ? (
                        <Link to={href} className={className}>
                          {label}
                        </Link>
                      ) : (
                        <a href={href} className={className}>
                          {label}
                        </a>
                      )}
                    </li>
                  );
                })}
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
