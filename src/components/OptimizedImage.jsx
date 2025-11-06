import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

/**
 * Generate responsive srcset for different image sizes
 * @param {string} src - Base image source
 * @param {Array<number>} sizes - Array of width sizes in pixels
 * @returns {string} - srcset string
 */
const generateSrcSet = (src, sizes = [400, 800, 1200, 1600]) => {
  // If src doesn't support size parameters, return empty string
  // This is a placeholder - adjust based on your image CDN/service
  return sizes
    .map((size) => `${src}?w=${size} ${size}w`)
    .join(", ");
};

/**
 * Generate sizes attribute for responsive images
 * @param {string} defaultSize - Default size (e.g., "100vw", "(max-width: 768px) 100vw, 50vw")
 * @returns {string} - sizes string
 */
const generateSizes = (defaultSize = "100vw") => {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${defaultSize}`;
};

/**
 * Optimized Image Component with lazy loading, placeholder, and responsive images
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {number} width - Image width (optional, for better performance)
 * @param {number} height - Image height (optional, for better performance)
 * @param {string} placeholder - Placeholder color or gradient (optional)
 * @param {boolean} responsive - Enable responsive images with srcset (default: false)
 * @param {Array<number>} srcsetSizes - Array of widths for srcset generation
 * @param {string} sizes - Sizes attribute for responsive images
 * @param {string} fetchPriority - Fetch priority: "high", "low", or "auto"
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  placeholder = "bg-secondary/20",
  responsive = false,
  srcsetSizes = [400, 800, 1200, 1600],
  sizes,
  fetchPriority = "auto",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate srcset and sizes for responsive images
  const srcSet = useMemo(() => {
    if (!responsive || !src) return undefined;
    return generateSrcSet(src, srcsetSizes);
  }, [src, responsive, srcsetSizes]);

  const sizesAttr = useMemo(() => {
    if (!responsive) return undefined;
    return sizes || generateSizes();
  }, [responsive, sizes]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Placeholder/Skeleton while loading */}
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 animate-pulse z-0",
            placeholder
          )}
          aria-hidden="true"
        />
      )}

      {/* Error fallback */}
      {hasError ? (
        <div
          className={cn(
            "flex items-center justify-center bg-secondary/10 text-muted-foreground w-full h-full",
            className
          )}
          role="img"
          aria-label={alt}
        >
          <span className="text-sm">Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          srcSet={srcSet}
          sizes={sizesAttr}
          loading="lazy"
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full transition-opacity duration-300 relative z-10",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

