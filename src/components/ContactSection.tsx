import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities or just to say hi!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href="mailto:Saurabh114pal@gmail.com"
              className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm break-all">Saurabh114pal@gmail.com</p>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+918726703759"
              className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 8726703759</p>
            </a>

            {/* Location Card */}
            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Lucknow, Uttar Pradesh</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-card p-8 md:p-12 rounded-2xl border border-border shadow-card">
              <h3 className="text-2xl font-heading font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm currently looking for entry-level opportunities in IT development. If you have a position that matches my skills, I'd love to hear from you!
              </p>
              <a
                href="mailto:Saurabh114pal@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                <Send size={20} />
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
