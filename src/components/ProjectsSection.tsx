import { Calendar, Bot, Wallet, Briefcase } from "lucide-react";

const projects = [
  {
    title: "Job Portal Website",
    date: "June 2025 – Dec 2025",
    type: "Full Stack",
    icon: Briefcase,
    description: "A comprehensive job portal web application that enables users to find and apply for jobs while allowing employers to post job listings.",
    features: [
      "User registration & authentication",
      "Job posting and application modules",
      "Responsive UI with Bootstrap",
      "MySQL database management",
      "CRUD operations implementation",
      "Admin panel for job management",
    ],
    technologies: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
  },
  {
    title: "AI Virtual Assistant",
    date: "2025",
    type: "Frontend",
    icon: Bot,
    description: "Built a web-based AI assistant interface focused on creating a smooth user experience and interactive UI.",
    features: [
      "Interactive chat interface",
      "Smooth animations & transitions",
      "Responsive design",
      "Clean user experience",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Expense Tracker",
    date: "2025",
    type: "Frontend",
    icon: Wallet,
    description: "Created a frontend application to help users manage and track daily spending with focus on data visualization and clean interface design.",
    features: [
      "Daily expense tracking",
      "Data visualization",
      "Clean interface design",
      "Budget management",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects I've worked on during my learning journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, projectIndex) => {
            const IconComponent = project.icon;
            return (
              <div
                key={projectIndex}
                className="bg-gradient-card rounded-2xl border border-border shadow-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={16} />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
