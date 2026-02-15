const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold text-gradient-gold">SwapLux</span>
            <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">
              India's most trusted platform for luxury car swaps. Insured, inspected, and guaranteed.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Browse Cars", "List Your Car", "Pricing", "How It Works"] },
            { title: "Trust", links: ["Insurance Policy", "Inspection Process", "Legal Framework", "Dispute Resolution"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-xs">
            © 2026 SwapLux. All rights reserved.
          </p>
          <div className="flex gap-6 text-muted-foreground font-body text-xs">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
