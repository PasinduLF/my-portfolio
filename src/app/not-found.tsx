import Link from "next/link";
import { ArrowLeft, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-28 text-center">
      <p className="font-mono text-sm tracking-[0.3em] text-primary uppercase">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for may have been moved or never existed. Let&apos;s get you
        back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
        >
          <Home className="size-4" /> Back home
        </Link>
        <Link
          href="/#contact"
          className="glass inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium hover:bg-foreground/5"
        >
          <Mail className="size-4" /> Contact me
        </Link>
      </div>
      <Link
        href="/#projects"
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-3.5" /> Or browse my projects
      </Link>
    </section>
  );
}
