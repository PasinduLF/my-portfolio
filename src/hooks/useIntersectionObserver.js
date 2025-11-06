import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for Intersection Observer API
 * Used for lazy loading and progressive enhancement
 * 
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Threshold for intersection (0-1)
 * @param {string} options.rootMargin - Root margin for intersection
 * @param {boolean} options.triggerOnce - Only trigger once when intersecting
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and isIntersecting state
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "50px",
  triggerOnce = true,
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already intersected and triggerOnce is true, don't observe again
    if (hasIntersected && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && triggerOnce) {
          setHasIntersected(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return [elementRef, isIntersecting];
};

