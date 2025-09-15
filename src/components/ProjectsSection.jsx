import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Feedback System",
    description: "Web-based feedback system enabling students to evaluate courses and faculty members.",
    image: "/projects/project1.png",
    tags: ["Servlets", "JSP", "SQL", "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/21BQ1A1282/Feedback_Server_System",
  },
  {
    id: 2,
    title: "LinkedIn Clone Backend",
    description: "Backend for a LinkedIn clone handling authentication, posts, connections, and messaging.",
    image: "/projects/project2.jpg",
    tags: ["Spring Boot", "MySQL", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/21BQ1A1282/linkedin-clone",
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "User-friendly platform for creating and managing blog posts with CRUD functionality.",
    image: "/projects/project3.png",
    tags: ["Spring Boot", "SQL", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/21BQ1A1282/personal-projects/tree/master/Blog",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-background/95 dark:bg-background/95 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="cosmic-text">Projects</span>
        </h2>

        <p className="text-center transition-colors mb-12 max-w-2xl mx-auto">
          Here are some of my hands-on projects that demonstrate my technical
          skills in full-stack development, database management, and
          problem-solving.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden border border-fuchsia-500/20 bg-card dark:bg-card card-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-fuchsia-600 border border-fuchsia-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="transition-colors text-sm mb-4">{project.description}</p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-black-300 hover:cosmic-text transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-balck-300 hover:cosmic-text transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            href="https://github.com/21BQ1A1282"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
