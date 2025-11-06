import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate scroll progress percentage
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress);
    
    // Update on resize (in case content height changes)
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 z-50 transition-opacity duration-300",
        scrollProgress > 0 ? "opacity-100" : "opacity-0"
      )}
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-secondary/10 backdrop-blur-sm" />
      
      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/80 via-primary to-primary/80 backdrop-blur-sm transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: "shimmer 2s infinite linear",
            width: "50%"
          }}
        />
      </div>
    </div>
  );
};

