import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

import { siteConfig } from "@/data/site";
import { navItems } from "@/data/nav";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/shared/icons";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-portfolio grid gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            Pasindu<span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={`/#${item.id}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Get in touch</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-portfolio flex flex-wrap items-center justify-between gap-4 border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <a
          href="#hero"
          className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
