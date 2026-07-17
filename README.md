# Pasindu Lakshan — Portfolio

A premium, animated software engineering portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling, with a custom design-token system (dark/light themes)
- **Framer Motion** for scroll reveals, parallax, magnetic buttons, card tilt, and the custom cursor
- **shadcn/ui**-style components (Radix primitives + `cva`) — button, dialog, sheet, command palette, tabs, tooltip, form, etc.
- **react-hook-form + zod** for the contact form, sent via **EmailJS**
- **next-themes** for dark/light mode
- Live **GitHub REST API** integration (profile stats, repos, contribution heatmap) — no auth token required

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project Structure

```
src/
  app/                    # routes (home, /projects/[slug], sitemap, robots, OG image, icons)
  components/
    sections/             # hero, about, skills, journey, projects, certifications, github, writing, contact
    shared/                # navbar, footer, command palette, custom cursor, background effects, etc.
    ui/                    # shadcn-style primitives
  data/                    # typed real content: projects, skills, timeline, certifications, blog, site config
  lib/                     # utils, analytics, GitHub API client, SEO metadata, stats helpers
  hooks/                   # custom hooks (magnetic buttons, tilt, active section, media queries)
  types/                   # shared TypeScript interfaces
public/
  projects/                # project screenshots
  Pasindu-CV.pdf
```

## Content

All real content (projects, skills, timeline, certifications, blog posts) lives in `src/data/*.ts`, fully typed. Update those files to change what's shown on the site — no component changes needed.

Projects without a screenshot on disk render a designed placeholder (see `src/components/shared/project-image.tsx`) instead of a broken or fabricated image.

## Environment Variables

Optional — the site works fully without these:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Google Analytics 4 (no-ops if unset)
```

EmailJS credentials for the contact form are the existing public (client-safe) service/template/public keys and are already wired in `src/components/sections/contact-section.tsx`.
