import { MapPin, GraduationCap, Award } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Summary Card */}
          <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card">
            <h3 className="text-xl font-heading font-semibold mb-4 text-gradient">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated Computer Science Engineering fresher with hands-on knowledge of Python, Django, HTML, CSS, JavaScript, SQL, and web development fundamentals. Seeking an entry-level IT Developer / Software Developer role to apply programming skills, contribute to real-world projects, and grow in the IT industry.
            </p>
            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card">
            <h3 className="text-xl font-heading font-semibold mb-4 text-gradient flex items-center gap-2">
              <GraduationCap size={24} />
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold">Diploma in Computer Science</h4>
                <p className="text-muted-foreground text-sm">Government Polytechnic, Unnao</p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-semibold">Intermediate (12th) – 2023</h4>
                <p className="text-muted-foreground text-sm">Krishna Public Inter College</p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-semibold">High School (10th) – 2021</h4>
                <p className="text-muted-foreground text-sm">Krishna Public Inter College</p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card">
            <h3 className="text-xl font-heading font-semibold mb-4 text-gradient flex items-center gap-2">
              <Award size={24} />
              Certifications
            </h3>
            <ul className="space-y-3">
              {[
                "Python Programming – Simplilearn",
                "Data Analyst – Basics (Excel) – Simplilearn",
                "SEO Fundamentals",
              ].map((cert, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Card */}
          <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border shadow-card">
            <h3 className="text-xl font-heading font-semibold mb-4 text-gradient">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Hindi</span>
                  <span className="text-muted-foreground text-sm">Fluent</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: "95%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">English</span>
                  <span className="text-muted-foreground text-sm">Intermediate</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: "70%" }} />
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
