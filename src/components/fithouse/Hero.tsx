import heroImg from "@/assets/hero.jpg";
import { useScrollProgress } from "@/hooks/use-reveal";
import { GhostButton, GreenButton } from "./primitives";

export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const shift = (progress - 0.5) * 120;

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 grain">
        <img
          src={heroImg}
          alt="Cinematic gym concept placeholder; real FitHouse hero photography pending"
          width={1920}
          height={1200}
          className="h-full w-full object-cover object-center"
          style={{ transform: `scale(1.12) translate3d(0, ${shift * 0.4}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/70" />
        <div className="absolute inset-0 scanlines opacity-40" />
        {/* Generated concept marker — replace only with verified FitHouse photography. */}
        <div className="absolute right-5 top-24 hidden items-center gap-2 border border-lime/40 bg-background/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-lime backdrop-blur md:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          Concept image · real photo pending
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[100rem] flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-5xl">
          <p className="kicker mb-6 animate-[fade-in_0.8s_ease-out]">
            Fit House · El Seyahia El Rabaa
          </p>
          <h1 className="display text-[clamp(3.2rem,13vw,11rem)]">
            <span className="block overflow-hidden">
              <span className="block animate-[fade-in_0.9s_cubic-bezier(0.16,1,0.3,1)]">
                Your fitness
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block animate-[fade-in_1.1s_cubic-bezier(0.16,1,0.3,1)] text-lime"
                style={{ textShadow: "0 0 60px color-mix(in oklab, var(--lime) 45%, transparent)" }}
              >
                Community.
              </span>
            </span>
          </h1>

          <p className="mt-7 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
            Open 24/7 · 6th of October
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <GreenButton onClick={() => document.getElementById("membership")?.scrollIntoView()}>
              Join FitHouse
            </GreenButton>
            <GhostButton href="#training">Explore Training</GhostButton>
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6 hairline pt-6">
          <div className="flex min-w-0 flex-wrap gap-x-10 gap-y-3">
            {["Strength", "Calisthenics", "Kickboxing & MMA", "Classes", "Kids"].map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-lime md:inline">
            Scroll ↓
          </span>
        </div>
      </div>
    </section>
  );
}
