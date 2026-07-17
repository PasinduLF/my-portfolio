"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { sortedTimeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Journey"
          title="Career &"
          accent="education timeline."
          description="From coursework to production systems shipped for real clients."
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2" />

          <div className="space-y-10">
            {sortedTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "relative flex items-start md:items-center",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex size-8 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg">
                      <item.icon className="size-3.5 text-primary-foreground" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "ml-12 w-full md:ml-0 md:w-5/12",
                      isEven ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                    )}
                  >
                    <div className="glass-card rounded-2xl p-6 card-hover hover:-translate-y-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary uppercase tracking-wide">
                        {item.type === "education" ? "Education" : "Experience"}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm font-medium text-primary/90">{item.organization}</p>

                      <div
                        className={cn(
                          "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground",
                          isEven && "md:justify-end"
                        )}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          {item.location}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
