"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Briefcase,
  Copy,
  Download,
  FolderGit2,
  Home,
  Laptop,
  Mail,
  Moon,
  Sparkles,
  Sun,
  User,
} from "lucide-react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { trackButtonClick, trackCVDownload, trackExternalLink } from "@/lib/analytics";

const sections = [
  { label: "Home", id: "hero", icon: Home },
  { label: "About", id: "about", icon: User },
  { label: "Skills", id: "skills", icon: Sparkles },
  { label: "Journey", id: "journey", icon: Briefcase },
  { label: "Projects", id: "projects", icon: FolderGit2 },
  { label: "Contact", id: "contact", icon: Mail },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  const goToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    trackButtonClick(`command_palette_${id}`, "command_palette");
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen} title="Command Palette" description="Jump anywhere on the site">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          {sections.map((section) => (
            <CommandItem key={section.id} onSelect={() => runCommand(() => goToSection(section.id))}>
              <section.icon className="size-4" />
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {projects.slice(0, 6).map((project) => (
            <CommandItem
              key={project.slug}
              onSelect={() =>
                runCommand(() => {
                  if (project.hasCaseStudy) router.push(`/projects/${project.slug}`);
                  else goToSection("projects");
                })
              }
            >
              <FolderGit2 className="size-4" />
              {project.title}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))
            }
          >
            {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            Toggle theme
            <CommandShortcut>Light / Dark</CommandShortcut>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                navigator.clipboard.writeText(siteConfig.email);
                toast.success("Email copied to clipboard");
              })
            }
          >
            <Copy className="size-4" />
            Copy email address
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                trackCVDownload();
                const link = document.createElement("a");
                link.href = siteConfig.resumeUrl;
                link.download = "Pasindu-CV.pdf";
                link.click();
              })
            }
          >
            <Download className="size-4" />
            Download resume
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                trackExternalLink("github", siteConfig.social.github);
                window.open(siteConfig.social.github, "_blank", "noopener,noreferrer");
              })
            }
          >
            <GithubIcon className="size-4" />
            Open GitHub profile
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                trackExternalLink("linkedin", siteConfig.social.linkedin);
                window.open(siteConfig.social.linkedin, "_blank", "noopener,noreferrer");
              })
            }
          >
            <LinkedinIcon className="size-4" />
            Open LinkedIn profile
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <Laptop className="size-4" />
            Use system theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
