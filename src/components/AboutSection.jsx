
export const AboutSection = () => {

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
              Passionate Full-Stack / Backend Developer & Problem Solver
            </h3>
            <p className="transition-colors">
              A motivated and results-driven developer with hands-on experience
              building full-stack applications using Java, Spring Boot, and
              modern web technologies. I specialize in creating efficient
              backend systems, RESTful APIs, and responsive user interfaces.
            </p>
            <p className="transition-colors">
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
                className="px-6 py-3 rounded-full border border-fuchsia-500 text-fuchsia-600 hover:bg-fuchsia-500/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-0 animate-fade-in-delay-2 mx-auto">
            {/* Floating background layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-fuchsia-500/30 to-purple-500/30 blur-md animate-float" style={{ animationDelay: '1s' }}></div>

            {/* Main image container */}
            <div className="relative w-full h-full rounded-4xl overflow-hidden animate-float">
              <img
                src="/profile.png"
                alt="Sai Manikanta Madhavarapu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};