import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";

export function getProjectCount(): number {
  return projects.length;
}

export function getTechnologyCount(): number {
  const tags = new Set<string>();
  for (const project of projects) {
    for (const tag of project.tags) tags.add(tag);
  }
  return tags.size;
}

export function getCertificationCount(): number {
  return certifications.length;
}

export function getUniqueTechnologies(): string[] {
  const tags = new Set<string>();
  for (const project of projects) {
    for (const tag of project.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}
