import { Calendar, Clock, ArrowRight, BookOpen, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    id: 1,
    title: "Building a Modern Portfolio with React and Vite",
    excerpt:
      "Learn how to create a fast, responsive developer portfolio using React, Vite, and Tailwind CSS — from setup to deployment.",
    fullContent:
      "In this guide, you’ll learn how to set up a React project with Vite, configure Tailwind CSS, and deploy it using platforms like Netlify or Vercel. The article covers best practices for project structure, responsive layouts, and component organization for performance and scalability.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["React", "Vite", "TailwindCSS"],
    featured: true,
  },
  {
    id: 2,
    title: "Understanding React Hooks: A Deep Dive",
    excerpt:
      "Explore React Hooks like useState, useEffect, and custom hooks to build more efficient and reusable components.",
    fullContent:
      "React Hooks simplify state management and side effects in functional components. This post explains how useState, useEffect, and custom hooks help reduce boilerplate, improve code readability, and encourage reusable logic across components.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Hooks"],
    featured: false,
  },
  {
    id: 3,
    title: "Optimizing Web Performance: Best Practices",
    excerpt:
      "Discover how to boost your website’s performance using lazy loading, code splitting, caching, and image optimization.",
    fullContent:
      "Website performance directly affects user experience and SEO. This post covers optimization techniques such as image compression, caching strategies, and bundle analysis to enhance loading speed and responsiveness.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web"],
    featured: false,
  },
  {
    id: 4,
    title: "Developing Android Apps with Kotlin and Firebase",
    excerpt:
      "A beginner-friendly guide to building Android apps using Kotlin and integrating Firebase for authentication and storage.",
    fullContent:
      "Kotlin makes Android development concise and powerful. This post walks through creating an app with Firebase Authentication, Realtime Database, and Storage, with best practices for UI design and state handling.",
    date: "2024-02-01",
    readTime: "7 min read",
    category: "Mobile Development",
    tags: ["Kotlin", "Firebase", "Android"],
    featured: false,
  },
  {
    id: 5,
    title: "Getting Started with MongoDB and Node.js",
    excerpt:
      "Learn how to connect MongoDB with Node.js to build efficient backends for modern web and mobile apps.",
    fullContent:
      "This tutorial introduces MongoDB CRUD operations with Node.js using Mongoose. You’ll set up schemas, handle API routes, and understand how NoSQL data structures enhance flexibility and performance.",
    date: "2024-03-20",
    readTime: "6 min read",
    category: "Database",
    tags: ["MongoDB", "Node.js", "Backend"],
    featured: false,
  },
  {
    id: 6,
    title: "Applying OOP and MVC in Real-World Projects",
    excerpt:
      "Understand how Object-Oriented Programming (OOP) and MVC architecture simplify development and improve maintainability.",
    fullContent:
      "This post discusses the principles of OOP and the Model-View-Controller architecture using Java examples. Learn how these concepts improve scalability, code reuse, and team collaboration in real-world software systems.",
    date: "2024-04-10",
    readTime: "5 min read",
    category: "Software Engineering",
    tags: ["OOP", "MVC", "Java"],
    featured: false,
  },
];

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export const BlogSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedPost) {
        setSelectedPost(null);
      }
    };

    if (selectedPost) {
      window.addEventListener("keydown", handleKeyDown);
      // Trap focus in modal
      const modal = document.querySelector('[role="dialog"]');
      const focusableElements = modal?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      modal?.addEventListener("keydown", handleTabKey);
      firstElement?.focus();

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        modal?.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [selectedPost]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Blog</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on software development, mobile apps, and
            modern web technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter blog posts by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls={`blog-${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs animate-pulse"
              >
                <div className="h-4 bg-secondary/50 rounded w-3/4 mb-4" />
                <div className="h-4 bg-secondary/50 rounded w-full mb-2" />
                <div className="h-4 bg-secondary/50 rounded w-5/6 mb-6" />
                <div className="h-3 bg-secondary/50 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            role="tabpanel"
            id={`blog-${selectedCategory}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className={cn(
                  "bg-card p-6 rounded-lg shadow-xs card-hover border border-border relative overflow-hidden group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
                  post.featured && "md:col-span-2"
                )}
                tabIndex={0}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button - Opens Modal */}
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300 group/link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Popup Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            aria-describedby="blog-modal-content"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedPost(null);
              }
            }}
          >
            <div className="bg-card max-w-2xl w-full p-6 rounded-lg shadow-xl relative animate-fade-in focus:outline-none">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
                aria-label="Close blog post modal"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <h3 id="blog-modal-title" className="text-2xl font-bold mb-3 text-primary">
                {selectedPost.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4" aria-label={`Published on ${formatDate(selectedPost.date)}, ${selectedPost.readTime}`}>
                {formatDate(selectedPost.date)} • {selectedPost.readTime}
              </p>
              <p id="blog-modal-content" className="text-foreground leading-relaxed mb-6">
                {selectedPost.fullContent}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
