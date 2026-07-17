import "server-only";
import { siteConfig } from "@/data/site";
import type { GithubRepo, GithubUser } from "@/types";

const GITHUB_API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

type RawGithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
};

type RawGithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGithubUser(): Promise<GithubUser | null> {
  const user = await githubFetch<RawGithubUser>(`/users/${siteConfig.social.githubUsername}`);
  if (!user) return null;
  return {
    login: user.login,
    name: user.name,
    avatarUrl: user.avatar_url,
    htmlUrl: user.html_url,
    bio: user.bio,
    publicRepos: user.public_repos,
    followers: user.followers,
  };
}

export async function getGithubRepos(limit = 6): Promise<GithubRepo[]> {
  const repos = await githubFetch<RawGithubRepo[]>(
    `/users/${siteConfig.social.githubUsername}/repos?per_page=100&sort=pushed`
  );
  if (!repos) return [];

  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, limit)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      htmlUrl: repo.html_url,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
    }));
}
