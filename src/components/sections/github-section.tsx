import { Star, GitFork } from "lucide-react";

import { getGithubRepos, getGithubUser } from "@/lib/github";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { GithubIcon } from "@/components/shared/icons";
import { GithubHeatmap } from "@/components/sections/github-heatmap";

export async function GithubSection() {
  const [user, repos] = await Promise.all([getGithubUser(), getGithubRepos(6)]);

  return (
    <section id="github" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Open Source"
          title="Live from"
          accent="GitHub."
          description="Real, live data pulled straight from my GitHub profile — no fabricated stats."
        />

        <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <GithubIcon className="size-6" />
              <div>
                <p className="font-medium">@{siteConfig.social.githubUsername}</p>
                {user && (
                  <p className="text-sm text-muted-foreground">
                    {user.publicRepos} public repos · {user.followers} followers
                  </p>
                )}
              </div>
            </div>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              View full profile ↗
            </a>
          </div>

          <div className="mt-6 overflow-x-auto">
            <GithubHeatmap username={siteConfig.social.githubUsername} />
          </div>
        </div>

        {repos.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex flex-col rounded-2xl p-5 card-hover hover:-translate-y-1"
              >
                <p className="font-mono text-sm font-medium group-hover:text-primary transition-colors">
                  {repo.name}
                </p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                  {repo.description ?? "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3.5" /> {repo.stars}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="size-3.5" /> {repo.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {!user && repos.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            GitHub data temporarily unavailable —{" "}
            <a href={siteConfig.social.github} className="text-primary hover:underline">
              view profile directly ↗
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
