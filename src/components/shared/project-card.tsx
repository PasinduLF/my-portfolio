"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

import { useTilt } from "@/hooks/use-tilt";
import { ProjectImage } from "@/components/shared/project-image";
import { GithubIcon } from "@/components/shared/icons";
import { Badge } from "@/components/ui/badge";
import { trackExternalLink, trackProjectView } from "@/lib/analytics";
import type { Project } from "@/types";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(featured ? 4 : 6);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <div className={featured ? "relative aspect-[16/10] overflow-hidden" : "relative aspect-video overflow-hidden"}>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative size-full transition-transform duration-500 group-hover:scale-105">
          <ProjectImage image={project.image} title={project.title} priority={featured} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className={featured ? "text-xl font-semibold" : "text-lg font-semibold"}>{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackProjectView(project.title, project.demoUrl ?? "");
                trackExternalLink(`${project.title}_demo`, project.demoUrl ?? "");
              }}
              className="inline-flex items-center gap-1 font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Live Demo <ArrowUpRight className="size-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLink(`${project.title}_github`, project.githubUrl)}
            className="inline-flex items-center gap-1 font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <GithubIcon className="size-3.5" /> Code
          </a>
          {project.hasCaseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="ml-auto inline-flex items-center gap-1 font-medium text-primary transition-all hover:gap-1.5"
            >
              <FileText className="size-3.5" /> Case Study
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
