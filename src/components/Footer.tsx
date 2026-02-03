const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-gradient">SP</span>
            <span className="text-muted-foreground text-sm">| Saurabh Pal</span>
          </div>

          <div className="flex items-center gap-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} Saurabh Pal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
