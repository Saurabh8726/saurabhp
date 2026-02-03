import { ExternalLink, Calendar } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          {/* Job Portal Project */}
          <div className="bg-gradient-card rounded-2xl border border-border shadow-card overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Job Portal Website</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={16} />
                    <span>June 2025 – Dec 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    Full Stack
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                A comprehensive job portal web application that enables users to find and apply for jobs while allowing employers to post job listings.
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "User registration & authentication",
                    "Job posting and application modules",
                    "Responsive UI with Bootstrap",
                    "MySQL database management",
                    "CRUD operations implementation",
                    "Admin panel for job management",
                  ].map((feature, index) => (
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
                  {["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"].map((tech, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
