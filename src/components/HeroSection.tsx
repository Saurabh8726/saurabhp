import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Saurabh Pal
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-gradient mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              IT Developer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Computer Science Engineering fresher with hands-on knowledge of Python, Django, and web development. Ready to contribute to real-world projects.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                <FileText size={18} />
                My Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-border bg-card hover:bg-secondary transition-colors rounded-lg font-semibold"
              >
                View Projects
              </a>
              <a
                href="https://github.com/Saurabh8726"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-all rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-pal-304108370"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-all rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float">
                <img
                  src={profilePhoto}
                  alt="Saurabh Pal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative Ring */}
              <div className="absolute inset-0 w-full h-full rounded-full border-2 border-primary/20 animate-pulse-slow" style={{ transform: "scale(1.1)" }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
