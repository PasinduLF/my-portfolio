"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { skillCategories, skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [category, setCategory] = useState<string>("all");

  const filtered = skills.filter((s) => category === "all" || s.category === category);

  return (
    <section id="skills" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading eyebrow="Skills" title="Tools I reach for" accent="every day." />

        <Tabs value={category} onValueChange={setCategory} className="mt-12 items-center">
          <TabsList className="mx-auto">
            {skillCategories.map((c) => (
              <TabsTrigger key={c.value} value={c.value}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, index) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
                  className="glass-card group cursor-default rounded-2xl p-5 card-hover hover:-translate-y-1"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className={cn("rounded-lg bg-primary/10 p-2", skill.color)}>
                      <skill.icon className="size-[18px]" />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>

                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/[0.06]"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="font-mono">{skill.level}%</span>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="mb-1.5 font-semibold">{skill.name}</p>
                <p className="text-muted-foreground">{skill.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
