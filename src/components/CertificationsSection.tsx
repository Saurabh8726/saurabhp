import { Award, CheckCircle } from "lucide-react";

const certifications = [
  "Certified AI Foundations Associate",
  "AI Skills Passport",
  "Oracle Data Platform 2025 Certified Foundations Associate",
  "AI Tools Workshop",
  "O Level (NIELIT)",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-primary font-medium tracking-wider text-sm uppercase">Achievements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          Certifications
        </h2>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award size={20} className="text-primary" />
              </div>
              <span className="text-foreground font-medium flex-1">{cert}</span>
              <CheckCircle size={22} className="text-primary flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
