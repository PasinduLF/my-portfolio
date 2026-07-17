"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { blogCategories, blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function WritingSection() {
  const [category, setCategory] = useState("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category)),
    [category]
  );

  return (
    <section id="writing" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on building"
          accent="software."
          description="Short write-ups on the web, mobile, and backend technologies I use day to day."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {blogCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all",
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/[0.04] text-muted-foreground hover:bg-foreground/[0.08]"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filtered.map((post, index) => (
            <motion.button
              key={post.id}
              onClick={() => setActivePost(post)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              className={cn(
                "glass-card group rounded-2xl p-6 text-left card-hover hover:-translate-y-1",
                post.featured && "md:col-span-2"
              )}
            >
              <div className="flex items-center justify-between">
                <Badge variant="primary">{post.category}</Badge>
                {post.featured && <Badge variant="secondary">Featured</Badge>}
              </div>
              <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3.5" /> {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" /> {post.readTime}
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!activePost} onOpenChange={(open) => !open && setActivePost(null)}>
        <DialogContent className="max-w-2xl">
          {activePost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{activePost.title}</DialogTitle>
                <DialogDescription>
                  {formatDate(activePost.date)} · {activePost.readTime}
                </DialogDescription>
              </DialogHeader>
              <p className="leading-relaxed text-foreground/90">{activePost.content}</p>
              <div className="flex flex-wrap gap-2">
                {activePost.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
