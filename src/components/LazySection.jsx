import { Suspense, lazy } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionLoadingFallback } from "@/components/ui/loading-fallback";

/**
 * Lazy-loaded section component that only loads when it comes into view
 * Uses Intersection Observer for progressive loading
 * 
 * @param {React.ComponentType} component - Component to lazy load
 * @param {Object} observerOptions - Intersection Observer options
 * @param {React.ReactNode} fallback - Loading fallback component
 */
export const LazySection = ({
  component,
  observerOptions = { threshold: 0.1, rootMargin: "100px" },
  fallback = <SectionLoadingFallback />,
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    ...observerOptions,
    triggerOnce: true,
  });

  // Only load component when it's about to come into view
  const LazyComponent = isIntersecting ? lazy(() => component()) : null;

  return (
    <div ref={ref}>
      {LazyComponent ? (
        <Suspense fallback={fallback}>
          <LazyComponent />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

