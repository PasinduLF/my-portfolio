export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: path });
}

export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, eventParams);
}

export function trackButtonClick(buttonName: string, location = "unknown") {
  trackEvent("button_click", { button_name: buttonName, location });
}

export function trackProjectView(projectName: string, projectUrl: string) {
  trackEvent("project_view", { project_name: projectName, project_url: projectUrl });
}

export function trackContactForm(success: boolean) {
  trackEvent("contact_form_submit", { success });
}

export function trackCVDownload() {
  trackEvent("cv_download", { file_name: "Pasindu-CV.pdf" });
}

export function trackExternalLink(linkName: string, linkUrl: string) {
  trackEvent("external_link_click", { link_name: linkName, link_url: linkUrl });
}
