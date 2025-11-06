/**
 * Google Analytics 4 (GA4) Integration
 * 
 * To use this:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Set it as an environment variable: VITE_GA_MEASUREMENT_ID
 * 3. Or set it directly in this file (not recommended for production)
 */

// Get GA Measurement ID from environment variable or use placeholder
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  // Load gtag script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
};

/**
 * Track page view
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
};

/**
 * Track custom event
 * @param {string} eventName - Event name
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, eventParams);
};

/**
 * Track button click
 * @param {string} buttonName - Button name/identifier
 * @param {string} location - Location where button was clicked
 */
export const trackButtonClick = (buttonName, location = "unknown") => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location,
  });
};

/**
 * Track project view
 * @param {string} projectName - Project name
 * @param {string} projectUrl - Project URL
 */
export const trackProjectView = (projectName, projectUrl) => {
  trackEvent("project_view", {
    project_name: projectName,
    project_url: projectUrl,
  });
};

/**
 * Track contact form submission
 * @param {boolean} success - Whether submission was successful
 */
export const trackContactForm = (success) => {
  trackEvent("contact_form_submit", {
    success: success,
  });
};

/**
 * Track CV download
 */
export const trackCVDownload = () => {
  trackEvent("cv_download", {
    file_name: "Pasindu-CV.pdf",
  });
};

/**
 * Track external link click
 * @param {string} linkName - Link name/identifier
 * @param {string} linkUrl - Link URL
 */
export const trackExternalLink = (linkName, linkUrl) => {
  trackEvent("external_link_click", {
    link_name: linkName,
    link_url: linkUrl,
  });
};

