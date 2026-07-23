import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "modern-portfolio-react-vite",
    title: "Building a Modern Portfolio with React and Vite",
    excerpt:
      "How to create a fast, responsive developer portfolio using React, Vite, and Tailwind CSS — from setup to deployment.",
    content:
      "Setting up a React project with Vite gives you a near-instant dev server and fast production builds. Pair it with Tailwind CSS for utility-first styling, and you can move from a blank project to a polished, responsive portfolio quickly. The key decisions that matter most: keeping components small and composable, lazy-loading below-the-fold sections so the initial bundle stays small, and treating dark mode as a first-class design concern from the start rather than bolting it on later.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["React", "Vite", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks: A Deep Dive",
    excerpt:
      "Exploring useState, useEffect, and custom hooks to build more efficient and reusable components.",
    content:
      "React Hooks simplify state management and side effects in functional components. useState covers local component state, useEffect handles synchronization with the outside world (subscriptions, timers, fetches), and custom hooks let you extract and reuse stateful logic across components without changing their structure. The biggest gains come from writing small, single-purpose hooks rather than one large hook that tries to do everything.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Hooks"],
    featured: false,
  },
  {
    id: 3,
    slug: "optimizing-web-performance",
    title: "Optimizing Web Performance: Best Practices",
    excerpt:
      "Boosting a website's performance using lazy loading, code splitting, caching, and image optimization.",
    content:
      "Performance work pays off across two axes: how fast the first meaningful content appears, and how responsive the page stays afterward. Code splitting and route-level lazy loading shrink the initial bundle. Image optimization (correct sizing, modern formats, lazy loading below the fold) is usually the single biggest lever on real-world sites. Caching headers and a CDN handle the rest for repeat visits.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web"],
    featured: false,
  },
  {
    id: 4,
    slug: "android-kotlin-firebase",
    title: "Developing Android Apps with Kotlin and Firebase",
    excerpt:
      "A beginner-friendly walkthrough of building Android apps using Kotlin and integrating Firebase for auth and storage.",
    content:
      "Kotlin makes Android development concise, and Firebase removes most of the backend boilerplate for a small-to-medium app: Authentication for sign-in, Firestore or the Realtime Database for data, and Storage for media. The main design decision is picking a data model that matches how your screens actually read data, rather than mirroring a relational schema inside a NoSQL store.",
    date: "2024-02-01",
    readTime: "7 min read",
    category: "Mobile Development",
    tags: ["Kotlin", "Firebase", "Android"],
    featured: false,
  },
  {
    id: 5,
    slug: "mongodb-nodejs-getting-started",
    title: "Getting Started with MongoDB and Node.js",
    excerpt:
      "Connecting MongoDB with Node.js to build efficient backends for modern web and mobile apps.",
    content:
      "MongoDB pairs naturally with Node.js through Mongoose, which adds schema validation on top of MongoDB's flexible documents. The core workflow: define schemas that match your access patterns, expose CRUD operations through Express routes, and lean on indexes early rather than after performance becomes a problem.",
    date: "2024-03-20",
    readTime: "6 min read",
    category: "Database",
    tags: ["MongoDB", "Node.js", "Backend"],
    featured: false,
  },
  {
    id: 6,
    slug: "oop-mvc-real-world-projects",
    title: "Applying OOP and MVC in Real-World Projects",
    excerpt:
      "How Object-Oriented Programming and MVC architecture simplify development and improve maintainability.",
    content:
      "Object-Oriented Programming and the Model-View-Controller pattern show up constantly in real business applications — separating data (Model), presentation (View), and request handling (Controller) keeps a codebase navigable as it grows. The value isn't the pattern name, it's the discipline of keeping those three concerns from bleeding into each other as a team and codebase scale up.",
    date: "2024-04-10",
    readTime: "5 min read",
    category: "Software Engineering",
    tags: ["OOP", "MVC", "Java"],
    featured: false,
  },
  {
    id: 7,
    slug: "llm-apis-in-full-stack-apps",
    title: "Integrating LLM APIs into Full-Stack Apps",
    excerpt:
      "Practical lessons from wiring Gemini and Groq into production backends — prompt design, streaming responses, and handling failures gracefully.",
    content:
      "Adding an LLM API to a backend looks simple until it hits production: prompts need versioning like any other config, streaming responses change how your frontend has to render state, and every call needs a timeout and a fallback because model providers do have bad days. Groq's speed makes it a good fit for latency-sensitive features, while Gemini's larger context window suits tasks that need more source material in the prompt. The real engineering work isn't the API call — it's the retry logic, output validation, and cost controls around it.",
    date: "2026-05-12",
    readTime: "7 min read",
    category: "AI & Machine Learning",
    tags: ["AI/LLM APIs", "Gemini", "Groq", "Node.js"],
    featured: true,
  },
  {
    id: 8,
    slug: "rebuilding-portfolio-nextjs-app-router",
    title: "Why I Rebuilt My Portfolio with the Next.js App Router",
    excerpt:
      "Moving from a Vite single-page app to Next.js App Router for better SEO, image handling, and server components — what changed and what I'd do differently.",
    content:
      "My old portfolio was a Vite SPA — fast to develop, but every page was client-rendered, which meant weaker SEO and a blank screen until the JS bundle loaded. Rewriting it in Next.js with the App Router meant restructuring components around server vs. client boundaries for the first time: static content like the hero and about sections became server components with zero client JS, while interactive pieces like the contact form and project filters stayed client components. The payoff was real — static generation for every route, built-in image optimization, and per-page metadata for actual SEO — but it meant relearning where state should live in a codebase I thought I already knew well.",
    date: "2026-07-05",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["Next.js", "App Router", "React", "TypeScript"],
    featured: true,
  },
  {
    id: 9,
    slug: "docker-kubernetes-for-fullstack-devs",
    title: "Docker and Kubernetes for Full-Stack Developers",
    excerpt:
      "A practical primer on containerizing a multi-service app and deploying it with Kubernetes, from someone who learned it on a real microservices platform.",
    content:
      "Containerizing a multi-service app is mostly a discipline problem, not a tooling one: each service gets its own Dockerfile and its own responsibility, and docker-compose ties them together for local development so the whole stack comes up with one command. Kubernetes only earns its complexity once you actually need what it offers — rolling deploys, self-healing pods, and horizontal scaling per service. Starting with plain manifests before reaching for Helm charts made the underlying concepts (Deployments, Services, ConfigMaps) much easier to reason about than jumping straight to abstractions on top of them.",
    date: "2026-03-18",
    readTime: "8 min read",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "Microservices"],
    featured: false,
  },
  {
    id: 10,
    slug: "ai-coding-agents-changing-how-i-build",
    title: "How AI Coding Agents Are Changing the Way I Build Software",
    excerpt:
      "Reflections on working alongside agentic AI tools day to day — where they genuinely speed things up, and where a developer's judgment still matters most.",
    content:
      "Agentic coding tools have changed the shape of my day-to-day work more than any single framework has: they're genuinely fast at scaffolding, writing tests, and tracing bugs across a codebase I already understand. What hasn't changed is the part that actually takes engineering judgment — deciding what to build, spotting when a suggested approach is subtly wrong for the codebase's constraints, and reviewing generated code as carefully as I'd review a teammate's pull request. Treating an AI agent as a fast, occasionally overconfident collaborator rather than an oracle is what's made it a net positive rather than a source of silent technical debt.",
    date: "2026-06-20",
    readTime: "6 min read",
    category: "Software Engineering",
    tags: ["AI", "Developer Tools", "Productivity"],
    featured: false,
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
