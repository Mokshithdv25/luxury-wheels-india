import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Trust & Safety", href: "#trust" },
  { label: "Browse Cars", href: "#cars" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-nav border-b border-gold-subtle/30 shadow-luxury py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Crown className="w-6 h-6 text-primary transition-transform group-hover:rotate-12 duration-300" />
          <span className="font-display text-2xl font-bold text-gradient-gold">
            SwapLuxe
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="hover-underline-gold font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="ghost"
              className="font-body text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 tracking-wide"
            >
              Sign In
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/apply">
              <Button
                size="sm"
                className="bg-gradient-gold text-primary-foreground font-body font-semibold hover:opacity-90 shadow-gold tracking-wide px-6"
              >
                Request Invite
              </Button>
            </Link>
          </motion.div>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card-strong border-t border-gold-subtle/20 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 font-body">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <Link to="/apply" onClick={() => setOpen(false)}>
                <Button className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 mt-2 shadow-gold w-full">
                  Request Invite
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
