import { cn } from "@/lib/utils";

/**
 * Skeleton component for loading states
 */
export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-secondary/50",
        className
      )}
      {...props}
    />
  );
};

/**
 * Skeleton for project cards
 */
export const ProjectCardSkeleton = () => {
  return (
    <div className="glass-card rounded-lg overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-5 w-5 rounded" />
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton for skill cards
 */
export const SkillCardSkeleton = () => {
  return (
    <div className="glass-card p-6 rounded-lg">
      <Skeleton className="h-6 w-24 mb-4" />
      <Skeleton className="h-2 w-full rounded-full mb-2" />
      <Skeleton className="h-4 w-12 ml-auto" />
    </div>
  );
};

/**
 * Skeleton for text lines
 */
export const TextSkeleton = ({ lines = 3, className }) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
};

