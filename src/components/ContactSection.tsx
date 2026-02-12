import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Info */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-heading font-bold mb-3">Let's Connect</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium text-sm">Lucknow, UP, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href="mailto:Saurabh114pal@gmail.com" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                      Saurabh114pal@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-muted-foreground mb-3">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/saurabh-pal-304108370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border bg-background hover:border-primary/50 hover:text-primary transition-all rounded-lg"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/Saurabh8726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border bg-background hover:border-primary/50 hover:text-primary transition-all rounded-lg"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card flex flex-col justify-center">
              <h3 className="text-xl font-heading font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                I'm currently looking for entry-level opportunities in IT development. If you have a position that matches my skills, I'd love to hear from you!
              </p>
              <a
                href="mailto:Saurabh114pal@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                <Send size={18} />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;