import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown, KeyRound } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "How It Works", href: "#how" },
  { label: "Trust & Safety", href: "#trust" },
  { label: "Assets", href: "#future" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      // Navigate home first, then scroll after the page loads
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="hover-underline-gold font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop right: Members only */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://members.swapluxe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-[0.12em] uppercase hover-underline-gold group"
            >
              <KeyRound className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              Members
            </a>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
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
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-muted-foreground hover:text-foreground transition-colors tracking-wide cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://members.swapluxe.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors tracking-[0.12em] uppercase font-body"
              >
                <KeyRound className="w-4 h-4 opacity-60" />
                Members Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
