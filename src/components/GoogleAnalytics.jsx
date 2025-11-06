import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "@/lib/analytics";

/**
 * Google Analytics Component
 * Initializes GA and tracks page views
 */
export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== "undefined" && window.gtag) {
      trackPageView(location.pathname + location.search, document.title);
    }
  }, [location]);

  return null; // This component doesn't render anything
};

