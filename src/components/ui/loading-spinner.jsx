import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/**
 * Loading Spinner Component
 */
export const LoadingSpinner = ({ className, size = 20, ...props }) => {
  return (
    <Loader2
      className={cn("animate-spin text-primary", className)}
      size={size}
      {...props}
    />
  );
};

/**
 * Button Loading State
 */
export const ButtonLoader = ({ children, isLoading, ...props }) => {
  return (
    <button
      disabled={isLoading}
      className={cn(
        "cosmic-button flex items-center justify-center gap-2",
        isLoading && "opacity-75 cursor-not-allowed"
      )}
      {...props}
    >
      {isLoading && <LoadingSpinner size={16} />}
      {children}
    </button>
  );
};

