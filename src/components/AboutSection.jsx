import { Cloud, Code, Database } from "lucide-react";

export const AboutSection = () => {
  const skillsData = [
    {
      icon: Code,
      title: "Full-Stack Development",
      desc: "Building responsive web applications with Java, Spring Boot, JavaScript, and modern frameworks.",
    },
    {
      icon: Database,
      title: "Backend Engineering",
      desc: "Developing secure REST APIs, database systems, and high-performance server logic.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      desc: "Deploying and managing applications using GCP, Git, and modern DevOps practices.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 relative bg-background dark:bg-background transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="cosmic-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-400">
              A motivated and results-driven developer with hands-on experience
              building full-stack applications using Java, Spring Boot, and
              modern web technologies. I specialize in creating efficient
              backend systems, RESTful APIs, and responsive user interfaces.
            </p>
            <p className="text-gray-400">
              I'm passionate about solving complex problems through clean code
              and optimized algorithms, with proven skills demonstrated through
              competitive programming achievements and cloud certifications.
              Constantly expanding my expertise across development, data, and
              cloud domains.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-full border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {skillsData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card dark:bg-card border border-fuchsia-500/20 card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full cosmic-gradient">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
