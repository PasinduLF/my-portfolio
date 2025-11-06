import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SkillCardSkeleton } from "./ui/skeleton";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScipt", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },

  { name: "Java", level: 90, category: "backend" },
  { name: "Python", level: 90, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PHP", level: 90, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 90, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Android Studio", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`skills-${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
          id={`skills-${activeCategory}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {isLoading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <SkillCardSkeleton key={index} />
            ))
          ) : (
            filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              role="article"
              aria-label={`${skill.name} skill level ${skill.level} percent`}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div
                className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency: ${skill.level} percent`}
              >
                <div
                  className="bg-primary h-2 rounded-full orgin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                  aria-hidden="true"
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground" aria-hidden="true">
                  {skill.level}%
                </span>
              </div>
            </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
