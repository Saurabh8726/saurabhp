import { Code, Database, Wrench, Users } from "lucide-react";

const technicalSkills = [
  { category: "Programming Languages", skills: ["Python", "C++ (Intermediate)"] },
  { category: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { category: "Backend Framework", skills: ["Django"] },
  { category: "Database", skills: ["SQL", "MySQL"] },
  { category: "Concepts", skills: ["CRUD Operations", "OOP Basics"] },
  { category: "Tools", skills: ["VS Code"] },
];

const softSkills = [
  { name: "Problem Solving", icon: Code },
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Wrench },
  { name: "Basic Communication", icon: Users },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {index === 0 && <Code size={20} className="text-primary" />}
                    {index === 1 && <Code size={20} className="text-primary" />}
                    {index === 2 && <Wrench size={20} className="text-primary" />}
                    {index === 3 && <Database size={20} className="text-primary" />}
                    {index === 4 && <Code size={20} className="text-primary" />}
                    {index === 5 && <Wrench size={20} className="text-primary" />}
                  </div>
                  <h4 className="font-semibold text-sm">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
