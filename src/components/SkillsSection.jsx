import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [

  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  { name: "Java", level: 85, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Spring Boot", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },

  { name: "SQL", level: 80, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "MongoDB", level: 70, category: "database" },
  { name: "PostgreSQL", level: 65, category: "database" },

  { name: "Git/GitHub", level: 85, category: "cloud/devops" },
  { name: "Google Cloud (GCP)", level: 75, category: "cloud/devops" },
  { name: "Linux", level: 75, category: "cloud/devops" },

  { name: "Postman", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  
];

const categories = ["all", "frontend", "backend", "database", "cloud/devops", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-background/95 dark:bg-background/95 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="cosmic-text">Skills</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize",
                activeCategory === category ? "cosmic-button" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 rounded-lg border border-fuchsia-500/20 bg-card dark:bg-card card-hover transition-all duration-300"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full cosmic-gradient origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
