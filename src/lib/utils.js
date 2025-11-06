import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

/**
 * Get optimized image source with WebP fallback
 * @param {string} src - Original image source
 * @param {string} format - Preferred format (webp, avif, etc.)
 * @returns {string} - Optimized image source
 */
export const getOptimizedImageSrc = (src, format = "webp") => {
  // If image is already optimized or external, return as is
  if (src.startsWith("http") || src.includes(format)) {
    return src;
  }

  // For local images, you can add WebP versions
  // Example: /projects/portfolio.png -> /projects/portfolio.webp
  const basePath = src.substring(0, src.lastIndexOf("."));
  const extension = src.substring(src.lastIndexOf("."));
  
  // Return WebP version if available, otherwise original
  // In production, you'd check if WebP exists or use a CDN
  return `${basePath}.${format}`;
};

/**
 * Generate responsive image srcset
 * @param {string} baseSrc - Base image source
 * @param {number[]} widths - Array of widths for srcset
 * @returns {string} - Srcset string
 */
export const generateSrcSet = (baseSrc, widths = [400, 800, 1200]) => {
  return widths
    .map((width) => `${getOptimizedImageSrc(baseSrc)}?w=${width} ${width}w`)
    .join(", ");
};