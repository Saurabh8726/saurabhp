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
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

            {/* Experience Item */}
            <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-8 md:ml-auto">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-auto md:right-auto md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary shadow-glow md:left-0 md:-ml-2" />

              <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">IT Developer Training</h3>
                    <p className="text-primary font-medium">Techpile Technology Pvt. Ltd., Lucknow</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Calendar size={14} />
                      <span>June 2025 – Aug 2025</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Worked as an IT Developer trainee on real-time web development projects",
                    "Developed and maintained web applications using Python and Django",
                    "Designed responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
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
