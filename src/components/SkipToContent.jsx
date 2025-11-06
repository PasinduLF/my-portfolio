import { useEffect } from "react";

/**
 * Skip to main content link for keyboard navigation
 */
export const SkipToContent = () => {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const link = document.querySelector('[href="#main-content"]');
    if (link) {
      link.addEventListener("click", handleClick);
      return () => link.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

