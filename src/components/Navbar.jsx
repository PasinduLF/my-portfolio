import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Timeline", href: "#timeline", id: "timeline" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Blog", href: "#blog", id: "blog" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (isMenuOpen) {
      const menu = document.querySelector('[role="dialog"]');
      const focusableElements = menu?.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      menu?.addEventListener("keydown", handleTabKey);
      firstElement?.focus();

      return () => {
        menu?.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          href="#hero"
          onClick={() => setActiveSection("hero")}
          aria-label="Pasindu Portfolio - Go to home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Pasindu</span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <ul className="hidden md:flex space-x-8 list-none" role="list">
          {navItems.map((item, key) => (
            <li key={key} role="listitem">
              <a
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                }}
                className={cn(
                  "relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                  activeSection === item.id
                    ? "text-primary font-medium"
                    : "text-foreground/80 hover:text-primary"
                )}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile nav toggle button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* mobile nav menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <ul className="flex flex-col space-y-8 text-xl list-none" role="list">
            {navItems.map((item, key) => (
              <li key={key} role="listitem">
                <a
                  href={item.href}
                  className={cn(
                    "relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-4 py-2",
                    activeSection === item.id
                      ? "text-primary font-medium"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" aria-hidden="true" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
