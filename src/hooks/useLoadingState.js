import { useState, useEffect } from "react";

/**
 * Hook to simulate loading state for demonstration
 * In production, this would be replaced with actual data fetching
 * @param {number} delay - Delay in milliseconds before setting loading to false
 * @param {boolean} initialLoading - Initial loading state
 * @returns {boolean} - Loading state
 */
export const useLoadingState = (delay = 1000, initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, initialLoading]);

  return isLoading;
};

