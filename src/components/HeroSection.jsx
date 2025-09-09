import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background dark:bg-background transition-colors duration-300"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="ml-2 cosmic-text opacity-0 animate-fade-in-delay-1">
                Sai Manikanta
              </span>
              <span className="ml-2 cosmic-text opacity-0 animate-fade-in-delay-2">
                Madhavarapu
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I engineer secure and high-performance backend systems and APIs.
              Specializing in Java, Spring Boot, and database optimization, I
              build the core logic that powers dynamic and responsive web
              applications.
            </p>

            {/* Call-to-action button */}
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-0 animate-fade-in-delay-2">
          {/* Floating background layers */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-fuchsia-500/30 to-purple-500/30 blur-md animate-float" style={{animationDelay: '1s'}}></div>
          
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-pink-500" />
      </div>
    </section>
  );
};