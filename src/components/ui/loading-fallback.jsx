import { cn } from "@/lib/utils";

/**
 * Loading fallback component for Suspense boundaries
 */
export const LoadingFallback = ({ className, message = "Loading..." }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-[200px] w-full",
        className
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

/**
 * Section loading fallback - minimal version for section components
 */
export const SectionLoadingFallback = () => {
  return (
    <div
      className="py-24 px-4 relative"
      role="status"
      aria-live="polite"
      aria-label="Loading section"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-6 h-6 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

