import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AboutSection } from "@/components/AboutSection";

export const Home = () => {
    return(
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
        </main>

        {/* Footer */}

    </div>
    );
};