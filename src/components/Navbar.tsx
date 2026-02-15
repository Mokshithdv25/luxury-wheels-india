import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-display text-2xl font-bold text-gradient-gold">
          SwapLux
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#trust" className="hover:text-foreground transition-colors">Trust & Safety</a>
          <a href="#cars" className="hover:text-foreground transition-colors">Browse Cars</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="font-body text-sm text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-gold text-primary-foreground font-body font-semibold hover:opacity-90">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border p-6 flex flex-col gap-4 font-body">
          <a href="#how" className="text-muted-foreground hover:text-foreground">How It Works</a>
          <a href="#trust" className="text-muted-foreground hover:text-foreground">Trust & Safety</a>
          <a href="#cars" className="text-muted-foreground hover:text-foreground">Browse Cars</a>
          <Button className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 mt-2">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
