import { Building, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
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
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building size={28} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-heading font-bold">IT Developer Training</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    3 Months
                  </span>
                </div>
                <p className="text-primary font-medium mb-1">Techpile Technology Pvt. Ltd., Lucknow</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
                  <Calendar size={14} />
                  <span>June 2025 – Aug 2025</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Worked as an IT Developer trainee on real-time web development projects",
                    "Developed and maintained web applications using Python and Django",
                    "Designed responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["Python", "Django", "HTML", "CSS", "Bootstrap", "JavaScript"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;