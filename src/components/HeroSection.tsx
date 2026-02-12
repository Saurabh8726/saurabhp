import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image - Left */}
          <div className="flex-shrink-0 animate-scale-in order-2 lg:order-1" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float">
                <img
                  src={profilePhoto}
                  alt="Saurabh Pal"
                  className="w-full h-full object-cover object-[center_20%] scale-110"
                />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full border-2 border-primary/20 animate-pulse-slow" style={{ transform: "scale(1.1)" }} />
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm <span className="text-gradient">Saurabh Pal</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              IT Developer | Web Development
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Computer Science Engineering fresher with hands-on knowledge of Python, Django, and web development. Ready to contribute to real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:border-primary/50 transition-colors"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://www.linkedin.com/in/saurabh-pal-304108370"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-card hover:border-primary/50 hover:text-primary transition-all rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Saurabh8726"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-card hover:border-primary/50 hover:text-primary transition-all rounded-full"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;