"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "portfolio-intro-shown";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  // Deliberately a one-shot effect (empty deps): reading matchMedia directly
  // here avoids a race with framer-motion's useReducedMotion(), which can
  // resolve a tick after mount and re-run a dependent effect, canceling the
  // hide timer before it fires and leaving the splash stuck on screen.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    sessionStorage.setItem(SESSION_KEY, "1");
    // One-shot reveal decided from browser-only APIs (matchMedia/sessionStorage);
    // there's no external store to subscribe to, so this can't be modeled as one.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Pasindu Lakshan
            </span>
            <div className="h-px w-24 overflow-hidden bg-border">
              <motion.div
                className="h-full w-full bg-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
