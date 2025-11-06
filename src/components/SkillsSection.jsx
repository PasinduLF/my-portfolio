import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SkillCardSkeleton } from "./ui/skeleton";
import { Tooltip } from "./ui/tooltip";
import {
  Code2,
  FileCode,
  Globe,
  Layers,
  Database,
  Server,
  Terminal,
  GitBranch,
  Palette,
  Monitor,
  Smartphone,
  FileJson,
  Coffee,
  Boxes,
  Settings,
  Zap,
} from "lucide-react";

const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: FileCode,
    description: "Proficient in semantic HTML5 and modern CSS3 with responsive design principles",
    tags: ["Semantic HTML", "CSS3", "Responsive Design"],
    color: "text-orange-500",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: FileJson,
    description: "Strong understanding of ES6+, async/await, closures, and modern JavaScript patterns",
    tags: ["ES6+", "Async/Await", "DOM Manipulation"],
    color: "text-yellow-500",
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: Code2,
    description: "Expert in React hooks, context API, component composition, and state management",
    tags: ["Hooks", "Context API", "State Management"],
    color: "text-blue-500",
  },
  {
    name: "Bootstrap",
    level: 75,
    category: "frontend",
    icon: Layers,
    description: "Experience with Bootstrap grid system and component library",
    tags: ["Grid System", "Components"],
    color: "text-purple-500",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: Zap,
    description: "Proficient in utility-first CSS framework with custom configurations",
    tags: ["Utility-First", "Custom Config"],
    color: "text-cyan-500",
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    icon: Globe,
    description: "Experience with Next.js routing, SSR, and API routes",
    tags: ["SSR", "API Routes", "Routing"],
    color: "text-gray-900 dark:text-gray-100",
  },

  {
    name: "Java",
    level: 90,
    category: "backend",
    icon: Coffee,
    description: "Strong OOP skills with Java, including Spring Framework and enterprise applications",
    tags: ["OOP", "Spring Framework"],
    color: "text-red-500",
  },
  {
    name: "Python",
    level: 90,
    category: "backend",
    icon: Boxes,
    description: "Proficient in Python for backend development, data processing, and automation",
    tags: ["Backend", "Data Processing"],
    color: "text-blue-600",
  },
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: Server,
    description: "Experience building RESTful APIs and server-side applications with Node.js",
    tags: ["REST APIs", "Express"],
    color: "text-green-600",
  },
  {
    name: "Express",
    level: 75,
    category: "backend",
    icon: Terminal,
    description: "Building RESTful APIs and middleware with Express.js framework",
    tags: ["REST APIs", "Middleware"],
    color: "text-gray-600",
  },
  {
    name: "MongoDB",
    level: 80,
    category: "backend",
    icon: Database,
    description: "NoSQL database experience with MongoDB, including schema design and queries",
    tags: ["NoSQL", "Schema Design"],
    color: "text-green-500",
  },
  {
    name: "PHP",
    level: 90,
    category: "backend",
    icon: Code2,
    description: "Server-side scripting with PHP, including Laravel framework experience",
    tags: ["Laravel", "Server-Side"],
    color: "text-indigo-500",
  },
  {
    name: "MySQL",
    level: 85,
    category: "backend",
    icon: Database,
    description: "Relational database design, SQL queries, and database optimization",
    tags: ["SQL", "Database Design"],
    color: "text-blue-700",
  },

  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: GitBranch,
    description: "Version control with Git, including branching strategies and collaboration workflows",
    tags: ["Version Control", "Collaboration"],
    color: "text-orange-600",
  },
  {
    name: "Figma",
    level: 90,
    category: "tools",
    icon: Palette,
    description: "UI/UX design with Figma, including prototyping and design systems",
    tags: ["UI/UX", "Prototyping"],
    color: "text-purple-600",
  },
  {
    name: "VS Code",
    level: 90,
    category: "tools",
    icon: Monitor,
    description: "Proficient with VS Code extensions, debugging, and productivity features",
    tags: ["Extensions", "Debugging"],
    color: "text-blue-600",
  },
  {
    name: "Android Studio",
    level: 85,
    category: "tools",
    icon: Smartphone,
    description: "Android app development with Android Studio and Kotlin",
    tags: ["Android", "Kotlin"],
    color: "text-green-600",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  // Simulate loading state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for animating progress bars on scroll
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillId = entry.target.dataset.skillId;
          if (skillId) {
            setAnimatedSkills((prev) => new Set([...prev, skillId]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const skillCards = document.querySelectorAll("[data-skill-id]");

    skillCards.forEach((card) => observer.observe(card));

    return () => {
      skillCards.forEach((card) => observer.unobserve(card));
    };
  }, [isLoading, activeCategory]);

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
            filteredSkills.map((skill, key) => {
              const Icon = skill.icon || Code2;
              const isAnimated = animatedSkills.has(`${skill.name}-${key}`);
              const skillId = `${skill.name}-${key}`;

              return (
                <Tooltip
                  key={key}
                  content={
                    <div className="max-w-xs">
                      <p className="font-semibold mb-1">{skill.name}</p>
                      <p className="text-xs text-primary-foreground/90 mb-2">
                        {skill.description}
                      </p>
                      {skill.tags && skill.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {skill.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-0.5 text-xs bg-primary-foreground/20 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  }
                  position="top"
                  delay={300}
                >
                  <div
                    data-skill-id={skillId}
                    className={cn(
                      "bg-card p-6 rounded-lg shadow-xs border border-border/50",
                      "transition-all duration-300 group",
                      "hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:border-primary/30",
                      "hover:-translate-y-1"
                    )}
                    role="article"
                    aria-label={`${skill.name} skill level ${skill.level} percent`}
                  >
                    {/* Icon and Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={cn(
                          "p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300",
                          skill.color || "text-primary"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                            skill.color || "text-primary"
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h3>
                        {/* Tags/Badges */}
                        {skill.tags && skill.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skill.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-0.5 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                            {skill.tags.length > 2 && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full">
                                +{skill.tags.length - 2}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden mb-2"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.level} percent`}
                    >
                      <div
                        className={cn(
                          "h-full rounded-full bg-gradient-to-r from-primary via-primary to-primary/80",
                          "transition-all duration-1000 ease-out relative overflow-hidden",
                          isAnimated ? "opacity-100" : "opacity-0"
                        )}
                        style={{
                          width: isAnimated ? `${skill.level}%` : "0%",
                        }}
                        aria-hidden="true"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </div>
                    </div>

                    {/* Percentage */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        Proficiency
                      </span>
                      <span
                        className={cn(
                          "text-sm font-semibold transition-all duration-500",
                          isAnimated
                            ? "text-primary opacity-100"
                            : "text-muted-foreground opacity-0"
                        )}
                        aria-hidden="true"
                      >
                        {isAnimated ? `${skill.level}%` : "0%"}
                      </span>
                    </div>
                  </div>
                </Tooltip>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
