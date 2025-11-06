import { AboutSection } from "../components/AboutSection";
import { BlogSection } from "../components/BlogSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { TimelineSection } from "../components/TimelineSection";
import { ScrollProgress } from "../components/ScrollProgress";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Thame Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <TimelineSection/>
        <SkillsSection/>
        <CertificationsSection/>
        <ProjectsSection/>
        <BlogSection/>
        <ContactSection/>

      </main>

      {/* Footer*/}
      <Footer/>
    </div>
  );
};
