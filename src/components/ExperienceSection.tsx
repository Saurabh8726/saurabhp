import { Building, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and training
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Centered Experience Card */}
          <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Building size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">IT Developer Training</h3>
              <p className="text-primary font-medium text-lg mt-1">Techpile Technology Pvt. Ltd., Lucknow</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                <Calendar size={14} />
                <span>June 2025 – Aug 2025</span>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                "Worked as an IT Developer trainee on real-time web development projects",
                "Developed and maintained web applications using Python and Django",
                "Designed responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary/50 p-4 rounded-xl">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
