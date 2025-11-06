import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Optimized Image Component with lazy loading and placeholder
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {number} width - Image width (optional, for better performance)
 * @param {number} height - Image height (optional, for better performance)
 * @param {string} placeholder - Placeholder color or gradient (optional)
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  placeholder = "bg-secondary/20",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
          loading="lazy"
          decoding="async"
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

