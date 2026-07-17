import type { LucideIcon } from "lucide-react";

export interface ProjectImage {
  src: string;
  real: boolean;
  placeholderIcon?: LucideIcon;
  placeholderCaption?: string;
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  results?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: ProjectImage;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  hasCaseStudy: boolean;
  caseStudy?: ProjectCaseStudy;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon: LucideIcon;
  description: string;
  tags: string[];
  color: string;
}

export type TimelineType = "education" | "experience";

export interface TimelineItem {
  id: number;
  type: TimelineType;
  title: string;
  organization: string;
  location: string;
  period: string;
  sortDate: string;
  description: string;
  icon: LucideIcon;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  category: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface GithubUser {
  login: string;
  name: string | null;
  avatarUrl: string;
  htmlUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}
