"use client";

import { useReducedMotion } from "framer-motion";

export function BackgroundFx() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Edge-masked grid */}
      <div
        className="absolute inset-0 grid-bg opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Drifting gradient blobs */}
      <div
        className={
          "absolute -top-40 -left-40 size-[36rem] rounded-full bg-primary/20 blur-[110px] " +
          (reduceMotion ? "" : "animate-blob-drift")
        }
      />
      <div
        className={
          "absolute top-1/3 -right-40 size-[32rem] rounded-full bg-secondary/20 blur-[110px] " +
          (reduceMotion ? "" : "animate-blob-drift")
        }
        style={{ animationDelay: "-8s" }}
      />
      <div
        className={
          "absolute bottom-0 left-1/4 size-[28rem] rounded-full bg-primary/10 blur-[110px] " +
          (reduceMotion ? "" : "animate-blob-drift")
        }
        style={{ animationDelay: "-15s" }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
