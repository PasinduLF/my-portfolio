import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";
import { ProjectCardSkeleton } from "./ui/skeleton";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { trackProjectView, trackExternalLink, trackButtonClick } from "@/lib/analytics";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, contact form, and smooth animations.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "EmailJS"],
    demoUrl: "https://my-portfolio-rho-seven-75.vercel.app/",
    githubUrl: "https://github.com/PasinduLF/my-portfolio",
  },
  {
    id: 2,
    title: "Personal Finance Tracker App",
    description:
      "CashBuddy is a Kotlin-based Android app that helps users track income, expenses, and budgets. It features category-wise analysis, budget alerts, and data backup for simple, effective financial management.",
    image: "/projects/cashbuddy.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Staff Management System",
    description:
      "A comprehensive staff management system built with PHP and MySQL. It allows organizations to manage employee records, attendance, payroll, and performance evaluations. Features include employee onboarding, leave management, and reporting.",
    image: "/projects/staff.jpg",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");

  // Simulate loading state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags).sort()];
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully carfted with
          attention to detail, performance, and user experience.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                trackButtonClick(`filter_${tag}`, "projects_section");
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedTag === tag
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Active Filter Display */}
        {selectedTag !== "All" && (
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground">
              Showing projects with:
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm flex items-center gap-2">
              {selectedTag}
              <button
                onClick={() => setSelectedTag("All")}
                className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                aria-label="Clear filter"
              >
                <X size={14} />
              </button>
            </span>
            <span className="text-sm text-muted-foreground">
              ({filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"})
            </span>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 3 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover animate-fade-in"
              style={{ animationDelay: `${key * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={`${project.title} - Project Screenshot`}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="bg-gradient-to-br from-primary/10 to-secondary/20"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={cn(
                        "px-2 py-1 text-xs font-medium border rounded-full transition-all duration-300",
                        selectedTag === tag && selectedTag !== "All"
                          ? "bg-primary/20 text-primary border-primary/50 scale-105"
                          : "bg-secondary text-secondary-foreground"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      onClick={() => {
                        trackProjectView(project.title, project.demoUrl);
                        trackExternalLink(`${project.title}_demo`, project.demoUrl);
                      }}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      onClick={() => {
                        trackProjectView(project.title, project.githubUrl);
                        trackExternalLink(`${project.title}_github`, project.githubUrl);
                      }}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))
          ) : (
            // No projects found message
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No projects found with the tag "{selectedTag}"
              </p>
              <button
                onClick={() => setSelectedTag("All")}
                className="cosmic-button"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
        <div className="text-center my-12">
          <a
            href="https://github.com/PasinduLF"
            target="_blank"
            onClick={() => trackExternalLink("github_profile", "https://github.com/PasinduLF")}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
