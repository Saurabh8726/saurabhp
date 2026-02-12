import { Briefcase, Bot, Wallet } from "lucide-react";

const projects = [
  {
    title: "Job Portal Website",
    icon: Briefcase,
    description: "A comprehensive job portal web application that enables users to find and apply for jobs while allowing employers to post job listings.",
    technologies: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
  },
  {
    title: "AI Virtual Assistant",
    icon: Bot,
    description: "Built a web-based AI assistant interface focused on creating a smooth user experience and interactive UI.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Expense Tracker",
    icon: Wallet,
    description: "Created a frontend application to help users manage and track daily spending with focus on data visualization and clean interface design.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;