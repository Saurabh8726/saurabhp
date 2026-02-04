import { MapPin, GraduationCap, Award, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and what drives me
          </p>
        </div>

        {/* Professional Summary - Full Width */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card">
            <h3 className="text-xl font-heading font-semibold mb-4 text-gradient">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dedicated Computer Science Engineering fresher with hands-on knowledge of Python, Django, HTML, CSS, JavaScript, SQL, and web development fundamentals. Seeking an entry-level IT Developer / Software Developer role to apply programming skills, contribute to real-world projects, and grow in the IT industry.
            </p>
            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Education Card */}
          <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gradient">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary/50 p-4 rounded-xl border-l-4 border-primary">
                <h4 className="font-semibold text-foreground">Diploma in Computer Science</h4>
                <p className="text-muted-foreground text-sm mt-1">Government Polytechnic, Unnao</p>
              </div>
              <div className="bg-secondary/30 p-4 rounded-xl">
                <h4 className="font-medium text-foreground">Intermediate (12th) – 2023</h4>
                <p className="text-muted-foreground text-sm mt-1">Krishna Public Inter College</p>
              </div>
              <div className="bg-secondary/30 p-4 rounded-xl">
                <h4 className="font-medium text-foreground">High School (10th) – 2021</h4>
                <p className="text-muted-foreground text-sm mt-1">Krishna Public Inter College</p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gradient">Certifications</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: "Python Programming", org: "Simplilearn" },
                { name: "Data Analyst – Basics (Excel)", org: "Simplilearn" },
                { name: "SEO Fundamentals", org: "Online Course" },
              ].map((cert, index) => (
                <div key={index} className="bg-secondary/50 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-muted-foreground text-sm">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Languages size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gradient">Languages</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-secondary/50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">Hindi</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">Fluent</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full animate-pulse-slow" style={{ width: "95%" }} />
                </div>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">English</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">Intermediate</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full animate-pulse-slow" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
