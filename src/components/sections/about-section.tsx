"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Palette } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site";
import { trackButtonClick, trackCVDownload } from "@/lib/analytics";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive, user-friendly web and mobile applications with React, Next.js, Node.js, and Kotlin.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces and seamless user experiences with Figma.",
  },
  {
    icon: Briefcase,
    title: "Product Delivery",
    description:
      "Taking projects from idea to a working, deployed product — including real client systems.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading eyebrow="About" title="Building things that" accent="actually ship." />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg text-foreground/90">
              I&apos;m a Software Engineering undergraduate with a passion for building responsive,
              user-friendly web and mobile applications.
            </p>
            <p className="text-muted-foreground">
              I work with modern technologies like React, Next.js, Node.js, and Kotlin to bring
              ideas to life — from independent MERN and mobile projects to production business
              systems built during a software engineering internship at Sensus Hub Services, where
              I shipped a task manager, an ecommerce platform, and systems for two real client
              companies.
            </p>
            <p className="text-muted-foreground">
              I enjoy solving real-world problems through clean, efficient code, and I&apos;m
              always eager to learn new tools and frameworks.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={() => trackButtonClick("get_in_touch", "about_section")}
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                onClick={() => trackCVDownload()}
                className="glass inline-flex h-11 items-center rounded-full px-6 text-sm font-medium hover:bg-foreground/5"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group flex items-start gap-4 rounded-2xl p-6 card-hover hover:-translate-y-1"
              >
                <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <area.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{area.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
