import { Award } from "lucide-react";

const certifications = [
  { name: "Certified AI Foundations Associate", issuer: "Industry" },
  { name: "AI Skills Passport", issuer: "Professional" },
  { name: "Oracle Data Platform 2025 Certified", issuer: "Oracle" },
  { name: "AI Tools Workshop", issuer: "Workshop" },
  { name: "O Level (NIELIT)", issuer: "NIELIT" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            📜 <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-xl border border-border shadow-card hover:border-primary/50 hover:shadow-glow transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Award size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
              <p className="text-primary text-xs font-medium">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-muted-foreground text-sm">5+ certifications from industry leaders</span>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;