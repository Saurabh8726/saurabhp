import { Code2, Briefcase, GraduationCap, Languages } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Expertise in building web applications using modern technologies",
  },
  {
    icon: Briefcase,
    title: "Training Experience",
    description: "IT Developer at Techpile Technology Pvt. Ltd.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Diploma in Computer Science (2023-2026)",
  },
  {
    icon: Languages,
    title: "Continuous Learning",
    description: "Always exploring new technologies and frameworks",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg text-center">
            I'm a dedicated Computer Science Engineering fresher passionate about building modern web applications. With hands-on knowledge of Python, Django, and frontend technologies, I'm eager to contribute to real-world projects and grow in the IT industry.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 text-center">
            During my training at Techpile Technology, I worked on development projects and maintained real-time web applications. I designed responsive user interfaces and implemented secure authentication systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow-card hover:border-primary/50 hover:shadow-glow transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;