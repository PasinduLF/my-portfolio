"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { GithubIcon } from "@/components/shared/icons";
import { featuredProjects, otherProjects, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { trackExternalLink } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [tag, setTag] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredOthers = useMemo(
    () => (tag === "All" ? otherProjects : otherProjects.filter((p) => p.tags.includes(tag))),
    [tag]
  );
  const filteredFeatured = useMemo(
    () => (tag === "All" ? featuredProjects : featuredProjects.filter((p) => p.tags.includes(tag))),
    [tag]
  );

  return (
    <section id="projects" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Work"
          title="Featured"
          accent="projects."
          description="Real products — from independent builds to production systems delivered for real client companies."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by technology">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              role="tab"
              aria-selected={tag === t}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all",
                tag === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/[0.04] text-muted-foreground hover:bg-foreground/[0.08]"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {filteredFeatured.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        )}

        {filteredOthers.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOthers.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {filteredFeatured.length === 0 && filteredOthers.length === 0 && (
          <p className="mt-14 text-center text-muted-foreground">No projects match &ldquo;{tag}&rdquo;.</p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLink("github_profile", siteConfig.social.github)}
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-foreground/5"
          >
            <GithubIcon className="size-4" />
            Check My GitHub
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
