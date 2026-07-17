import { Suspense } from "react";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { GithubSection } from "@/components/sections/github-section";
import { WritingSection } from "@/components/sections/writing-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Skeleton } from "@/components/ui/skeleton";

function SectionFallback() {
  return (
    <div className="container-portfolio py-28">
      <Skeleton className="mx-auto h-8 w-64" />
      <Skeleton className="mx-auto mt-4 h-4 w-96 max-w-full" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>
      <AboutSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <CertificationsSection />
      <Suspense fallback={<SectionFallback />}>
        <GithubSection />
      </Suspense>
      <WritingSection />
      <ContactSection />
    </>
  );
}
