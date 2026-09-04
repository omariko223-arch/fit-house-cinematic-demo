import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#training", label: "Training" },
  { href: "#membership", label: "Membership" },
  { href: "#trainers", label: "The House" },
  { href: "#schedule", label: "Schedule" },
  { href: "#location", label: "Location" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[100rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 transition-all duration-500 md:px-10",
          scrolled && "border-b border-border py-3",
        )}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center bg-lime font-display text-sm text-primary-foreground">
            FH
          </span>
          <span className="truncate font-display text-lg tracking-[0.16em]">FITHOUSE</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lime-underline font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="bg-lime px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Join
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
        >
          <span
            className={cn("h-px w-4 bg-foreground transition-transform", open && "translate-y-[3px] rotate-45")}
          />
          <span
            className={cn("h-px w-4 bg-foreground transition-transform", open && "-translate-y-[3px] -rotate-45")}
          />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-b-0",
        )}
      >
        <nav className="flex flex-col px-5 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-display text-2xl uppercase tracking-wide last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
