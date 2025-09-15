import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background dark:bg-background transition-colors duration-300"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
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
          <p className="text-lg md:text-xl transition-colors max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I engineer secure and high-performance backend systems and APIs.
            Specializing in Java, Spring Boot, and database optimization, I build
            the core logic that powers dynamic and responsive web applications.
          </p>

          {/* Call-to-action button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-black-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-pink-500" />
      </div>
    </section>
  );
};
