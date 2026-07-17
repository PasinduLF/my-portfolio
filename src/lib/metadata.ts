import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const defaultTitle = `${siteConfig.name} — ${siteConfig.role}`;

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: defaultTitle,
      template: `%s — ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      siteConfig.name,
      "Software Engineer",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Web Developer",
      "Software Engineering",
      "Sri Lanka",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      url: siteConfig.url,
      title: defaultTitle,
      description: siteConfig.description,
      siteName: `${siteConfig.name} Portfolio`,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: siteConfig.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Software Engineering Undergraduate",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wattala",
      addressCountry: "LK",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Full Stack Development",
      "Software Engineering",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
