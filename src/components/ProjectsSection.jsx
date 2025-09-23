import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PocketPulse",
    description: "A personal finance platform with secure authentication, transaction tracking, analytics dashboard, and automated financial reports. Deployed using Docker with integrated Cloudinary and email notifications.",
    image: "/projects/pocketpulse.png",
    tags: ["Spring Boot", "PostgreSQL", "React", "Tailwind CSS", "JWT", "Docker"],
    demoUrl: "https://pocketpulse-finance.netlify.app/",
    githubUrl: "https://github.com/21BQ1A1282/PocketPulse-v1.0-Server",
  },
  {
    id: 2,
    title: "BGClear",
    description: "A credit-based background removal tool with real-time credit tracking, authentication, and payment integration. Built with Spring Boot backend and Clerk-based authentication.",
    image: "/projects/bgclear.png",
    tags: ["Spring Boot", "PostgreSQL", "React", "Tailwind CSS", "Clerk"],
    demoUrl: "https://bgclear-v1.netlify.app",
    githubUrl: "https://github.com/21BQ1A1282/BGClear-Server",
  },
  {
    id: 3,
    title: "LinkedIn Clone Backend",
    description: "Backend for a LinkedIn-like platform with user authentication, posts, connections, and messaging. Implemented Spring Security with JWT for secure access control.",
    image: "/projects/linkedin-clone.png",
    tags: ["Spring Boot", "Java", "MySQL", "Spring Security", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/21BQ1A1282/linkedin-clone",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website to showcase my projects and skills. Features dark/light mode, interactive project cards, and smooth navigation for a modern user experience.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    demoUrl: "https://saimanikanta-portfolio.vercel.app",
    githubUrl: "https://github.com/21BQ1A1282/portfolio-react",
  },
  {
    id: 5,
    title: "Object Detection",
    description: "An object detection system using Mask R-CNN with 94% accuracy on custom datasets. Includes a Flask web app for real-time image uploads and detection visualization.",
    image: "/projects/mask-rcnn.png",
    tags: ["Python", "TensorFlow", "Flask", "OpenCV", "Mask R-CNN"],
    demoUrl: "https://detectobject-maskrcnn.onrender.com",
    githubUrl: "https://github.com/21BQ1A1282/Mask_R-CNN-for-object-detection-in-flask",
  },
  {
    id: 6,
    title: "Feedback System",
    description: "web-based platform designed with the primary objective of collecting and managing feedback from students in college",
    image: "/projects/feedbackServer.png",
    tags: ["Servlets", "JSP", "SQL", "HTML5", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/21BQ1A1282/Feedback_Server_System",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-background/95 dark:bg-background/95 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="cosmic-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my hands-on projects that demonstrate my technical
            skills in full-stack development, database management, and
            problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-fuchsia-500/20 bg-card dark:bg-card hover:border-fuchsia-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/10"
            >
              {/* Image Container */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Container */}
              <div className="p-6 relative">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-pink-500/15 to-purple-600/15 text-fuchsia-600 border border-fuchsia-500/30 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-fuchsia-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-6 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex justify-between items-center pt-4 border-t border-fuchsia-500/10">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${project.demoUrl === "#"
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-foreground hover:text-fuchsia-600 hover:scale-110"
                        }`}
                      title={project.demoUrl === "#" ? "Demo not available" : "Live Demo"}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-fuchsia-600 hover:scale-110 transition-all duration-300"
                      title="View Code"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>

                  <div className="w-2 h-2 rounded-full bg-fuchsia-500/60 group-hover:bg-fuchsia-500 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a
            href="https://github.com/21BQ1A1282"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:gap-4 hover:shadow-2xl hover:shadow-fuchsia-500/20"
          >
            <span>Explore More on GitHub</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};