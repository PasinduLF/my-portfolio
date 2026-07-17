import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Lightbulb, TrendingUp } from "lucide-react";

import { getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { ProjectImage } from "@/components/shared/project-image";
import { GithubIcon } from "@/components/shared/icons";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return projects.filter((p) => p.hasCaseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata();

  return buildMetadata({
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasCaseStudy || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <article className="py-28">
      <div className="container-portfolio max-w-4xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" /> Back to projects
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Live Demo <ArrowUpRight className="size-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium"
          >
            <GithubIcon className="size-4" /> View Source
          </a>
        </div>

        <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl border border-border">
          <ProjectImage image={project.image} title={project.title} priority />
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <section>
            <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
              <Lightbulb className="size-4" /> Problem
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{caseStudy.problem}</p>
          </section>
          <section>
            <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
              <CheckCircle2 className="size-4" /> Solution
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
            <Layers className="size-4" /> Architecture
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{caseStudy.architecture}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">Key Features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {caseStudy.features.map((feature) => (
              <li key={feature} className="glass-card flex items-start gap-2.5 rounded-xl p-4 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {caseStudy.results && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
              <TrendingUp className="size-4" /> Results
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{caseStudy.results}</p>
          </section>
        )}
      </div>
    </article>
  );
}
