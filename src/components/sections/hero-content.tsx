"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, User } from "lucide-react";

import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { useMagnetic } from "@/hooks/use-magnetic";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { siteConfig } from "@/data/site";
import { trackButtonClick, trackCVDownload } from "@/lib/analytics";

const floatingBadges = [
  { label: "React", className: "left-[4%] top-[18%]", delay: 0 },
  { label: "Next.js", className: "right-[6%] top-[12%]", delay: 0.6 },
  { label: "TypeScript", className: "left-[10%] bottom-[24%]", delay: 1.2 },
  { label: "Node.js", className: "right-[2%] bottom-[32%]", delay: 1.8 },
  { label: "PostgreSQL", className: "left-[42%] top-[6%]", delay: 2.4 },
  { label: "Prisma", className: "right-[20%] bottom-[10%]", delay: 3 },
];

function MagneticButton({
  children,
  className,
  href,
  download,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  download?: boolean;
  onClick?: () => void;
}) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>(0.25);
  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export function HeroContent({
  avatarUrl,
  stats,
}: {
  avatarUrl: string | null;
  stats: { label: string; value: number | null }[];
}) {
  const [showName, setShowName] = useState(false);
  const name = "Pasindu Lakshan";
  const { displayedText: nameText, isTyping } = useTypingAnimation(name, 55, showName, 400);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="container-portfolio relative z-10 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {siteConfig.availability}
          </motion.div>

          <p className="mb-2 text-lg text-muted-foreground">
            Hi, I&apos;m{" "}
            <span className="font-medium text-foreground">
              {nameText}
              {isTyping && (
                <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-blink bg-primary align-middle" />
              )}
            </span>
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            I build full-stack products
            <br />
            from <span className="text-gradient">idea to production.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Software Engineering undergraduate specializing in React, Next.js, and Node.js.
            I&apos;ve shipped {stats[0]?.value ?? "10"} real projects — including production
            systems built during a software engineering internship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              onClick={() => trackButtonClick("view_work", "hero")}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_30px_2px_rgba(59,130,246,0.4)]"
            >
              View My Work
              <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton
              href={siteConfig.resumeUrl}
              download
              onClick={() => trackCVDownload()}
              className="glass inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium hover:bg-foreground/5"
            >
              <Download className="size-4" />
              Download CV
            </MagneticButton>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value === null ? (
                    "—"
                  ) : (
                    <AnimatedCounter value={stat.value} suffix="+" />
                  )}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + badge.delay * 0.1 }}
              className={`glass absolute z-20 rounded-full px-3.5 py-1.5 font-mono text-xs text-foreground/80 animate-float ${badge.className}`}
              style={{ animationDelay: `${badge.delay}s` }}
            >
              {badge.label}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto flex aspect-square w-3/4 items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl" />
            <div className="glass relative flex size-full items-center justify-center overflow-hidden rounded-full border border-white/10">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt="Pasindu Lakshan"
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
              ) : (
                <User className="size-16 text-muted-foreground" />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to About section"
      >
        <span className="text-xs">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
