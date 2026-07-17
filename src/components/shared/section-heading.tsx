"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-primary uppercase"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "mt-4 text-muted-foreground",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
