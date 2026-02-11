import { Code2, Briefcase, GraduationCap, Languages } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <span className="text-primary font-medium tracking-wider text-sm uppercase">About Me</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          Who I <span className="text-gradient">Am</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a dedicated Computer Science Engineering fresher passionate about building modern web applications. With hands-on knowledge of Python, Django, and frontend technologies, I'm eager to contribute to real-world projects and grow in the IT industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              During my training at Techpile Technology, I worked on development projects and maintained real-time web applications. I designed responsive user interfaces and implemented secure authentication systems.
            </p>
          </div>

          {/* Right Column - Info Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Full-Stack Development */}
            <div className="bg-gradient-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Code2 size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm">Python, Django, HTML, CSS, JavaScript, Bootstrap</p>
            </div>

            {/* Training Experience */}
            <div className="bg-gradient-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Training Experience</h3>
              <p className="text-muted-foreground text-sm">IT Developer at Techpile Technology Pvt. Ltd.</p>
            </div>

            {/* Education */}
            <div className="bg-gradient-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground text-sm">Diploma in Computer Science (2023-2026)</p>
            </div>

            {/* Languages */}
            <div className="bg-gradient-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Languages size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Languages</h3>
              <p className="text-muted-foreground text-sm">Hindi (Fluent), English (Intermediate)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
