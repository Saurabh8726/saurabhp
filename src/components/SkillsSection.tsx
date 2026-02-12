import { Code, Database, Wrench, Globe, Server, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++ (Intermediate)"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend Framework",
    icon: Server,
    skills: ["Django"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL", "MySQL"],
  },
  {
    title: "Concepts",
    icon: Code,
    skills: ["CRUD Operations", "OOP Basics"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Git", "GitHub"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow-card hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;