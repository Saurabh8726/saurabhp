import { MapPin, GraduationCap, Award, Languages, Target, Lightbulb, Code2 } from "lucide-react";

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

        {/* Professional Summary - Free Flow */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-gradient">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Dedicated Computer Science Engineering fresher with hands-on knowledge of Python, Django, HTML, CSS, JavaScript, SQL, and web development fundamentals. I'm passionate about building user-friendly applications and solving real-world problems through technology.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Currently pursuing my Diploma in Computer Science from Government Polytechnic, Unnao, I have developed a strong foundation in both frontend and backend technologies. My training at Techpile Technology, Lucknow has equipped me with practical experience in full-stack development, working on projects like Job Portals, AI Assistants, and Expense Trackers.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            <span>Lucknow, Uttar Pradesh, India</span>
          </div>
        </div>

        {/* What I Bring - 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target size={24} className="text-primary" />
            </div>
            <h4 className="font-heading font-semibold mb-2">Goal-Oriented</h4>
            <p className="text-muted-foreground text-sm">Focused on delivering quality solutions and continuously improving my skills in the IT industry.</p>
          </div>
          <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb size={24} className="text-primary" />
            </div>
            <h4 className="font-heading font-semibold mb-2">Quick Learner</h4>
            <p className="text-muted-foreground text-sm">Eager to learn new technologies and adapt to changing industry trends with enthusiasm.</p>
          </div>
          <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:border-primary/50 transition-all duration-300 group text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Code2 size={24} className="text-primary" />
            </div>
            <h4 className="font-heading font-semibold mb-2">Problem Solver</h4>
            <p className="text-muted-foreground text-sm">Enjoy tackling complex challenges and finding efficient solutions through clean, maintainable code.</p>
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
