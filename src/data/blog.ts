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
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
