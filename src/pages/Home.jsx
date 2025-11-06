import { Suspense, lazy } from "react";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ScrollProgress } from "../components/ScrollProgress";
import { SkipToContent } from "../components/SkipToContent";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { SectionLoadingFallback } from "@/components/ui/loading-fallback";

// Lazy load below-the-fold sections for better initial load performance
const AboutSection = lazy(() => import("../components/AboutSection").then((module) => ({ default: module.AboutSection })));
const TimelineSection = lazy(() => import("../components/TimelineSection").then((module) => ({ default: module.TimelineSection })));
const SkillsSection = lazy(() => import("../components/SkillsSection").then((module) => ({ default: module.SkillsSection })));
const CertificationsSection = lazy(() => import("../components/CertificationsSection").then((module) => ({ default: module.CertificationsSection })));
const ProjectsSection = lazy(() => import("../components/ProjectsSection").then((module) => ({ default: module.ProjectsSection })));
const BlogSection = lazy(() => import("../components/BlogSection").then((module) => ({ default: module.BlogSection })));
const ContactSection = lazy(() => import("../components/ContactSection").then((module) => ({ default: module.ContactSection })));
const Footer = lazy(() => import("../components/Footer").then((module) => ({ default: module.Footer })));

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Skip to Content Link */}
      <SkipToContent />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Thame Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" tabIndex={-1}>
        {/* Above-the-fold: Load immediately */}
        <HeroSection />
        
        {/* Below-the-fold: Lazy load with Suspense */}
        <Suspense fallback={<SectionLoadingFallback />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoadingFallback />}>
          <TimelineSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoadingFallback />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoadingFallback />}>
          <CertificationsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoadingFallback />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoadingFallback />}>
          <BlogSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer - Lazy loaded */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};
