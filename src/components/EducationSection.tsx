import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation driving my passion for technology
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-heading font-bold">Diploma in Computer Science</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    2023 - 2026
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">Computer Science / Information Technology</p>

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">Core Subjects</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Data Structures", "DBMS", "Operating Systems", "Web Development", "OOP"].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Emphasizing practical and project-based learning approach with focus on real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;