import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ProjectImage as ProjectImageType } from "@/types";

export function ProjectImage({
  image,
  title,
  priority = false,
  className,
}: {
  image: ProjectImageType;
  title: string;
  priority?: boolean;
  className?: string;
}) {
  if (!image.real) {
    const Icon = image.placeholderIcon;
    return (
      <div
        className={cn(
          "relative flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent",
          className
        )}
      >
        <div className="grid-bg absolute inset-0 opacity-40" />
        {Icon && (
          <div className="relative z-10 rounded-2xl bg-background/40 p-4 backdrop-blur-sm">
            <Icon className="size-8 text-primary" />
          </div>
        )}
        <p className="relative z-10 max-w-[80%] text-center text-xs text-muted-foreground">
          {image.placeholderCaption}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={`${title} — screenshot`}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("object-cover", className)}
    />
  );
}
