import { getGithubUser } from "@/lib/github";
import { getCertificationCount, getProjectCount, getTechnologyCount } from "@/lib/stats";
import { HeroContent } from "@/components/sections/hero-content";

export async function HeroSection() {
  const githubUser = await getGithubUser();

  const stats = [
    { label: "Projects Shipped", value: getProjectCount() },
    { label: "Technologies", value: getTechnologyCount() },
    { label: "Certifications", value: getCertificationCount() },
    { label: "GitHub Repos", value: githubUser?.publicRepos ?? null },
  ];

  return <HeroContent avatarUrl={githubUser?.avatarUrl ?? null} stats={stats} />;
}
