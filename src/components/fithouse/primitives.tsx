import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  mask = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  mask?: boolean;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(mask ? "reveal-mask" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="kicker">{index}</span>
      <span className="h-px w-8 bg-lime/60" />
      <span className="kicker text-muted-foreground">{children}</span>
    </div>
  );
}

export function DemoTag({ children = "Demo content" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-lime/35 bg-lime/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
      <span className="h-1 w-1 rounded-full bg-lime" />
      {children}
    </span>
  );
}

export function GreenButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden bg-lime px-7 py-4 font-display text-sm uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
      <span className="relative">{children}</span>
    </button>
  );
}

export function GhostButton({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn(
        "group inline-flex items-center justify-center border border-foreground/25 px-7 py-4 font-display text-sm uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-lime hover:text-lime",
        className,
      )}
    >
      {children}
    </a>
  );
}
