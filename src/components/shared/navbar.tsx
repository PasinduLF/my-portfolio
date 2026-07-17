"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Command, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MobileNav } from "@/components/shared/mobile-nav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(["hero", ...navItems.map((n) => n.id)]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "glass-nav py-3 shadow-sm" : "py-5"
      )}
      style={isScrolled ? { background: "var(--glass-bg)", backdropFilter: "blur(20px)" } : undefined}
    >
      <nav className="container-portfolio flex items-center justify-between" aria-label="Main navigation">
        <Link href="/#hero" className="text-sm font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-primary rounded-md">
          Pasindu<span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/#${item.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden items-center gap-2 text-muted-foreground md:inline-flex"
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
          >
            <Command className="size-3.5" />
            <span className="text-xs">Search</span>
            <kbd className="ml-1 rounded border border-border bg-foreground/5 px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </Button>

          <ThemeToggle className="hidden sm:flex" />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <MobileNav activeSection={activeSection} onNavigate={() => setMenuOpen(false)} />
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
