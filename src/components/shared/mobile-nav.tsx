"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function MobileNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: () => void;
}) {
  return (
    <SheetContent side="right" className="w-full sm:max-w-xs">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <ul className="mt-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`/#${item.id}`}
              onClick={onNavigate}
              className={cn(
                "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-foreground/5"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-muted-foreground">Theme</span>
        <ThemeToggle />
      </div>
    </SheetContent>
  );
}
