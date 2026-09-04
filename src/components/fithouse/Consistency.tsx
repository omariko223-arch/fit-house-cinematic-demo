import textureImg from "@/assets/texture.jpg";
import nightImg from "@/assets/night.jpg";
import { useScrollProgress } from "@/hooks/use-reveal";
import { Reveal } from "./primitives";

export function Consistency() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const scale = 0.82 + progress * 0.3;
  const drift = (0.5 - progress) * 160;

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <img
          src={textureImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          style={{ transform: `scale(${1 + progress * 0.15})` }}
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="relative mx-auto max-w-[100rem] px-5 md:px-10">
        <div
          className="whitespace-nowrap font-display text-[clamp(3rem,17vw,15rem)] leading-[0.82] uppercase"
          style={{ transform: `translateX(${drift * 0.4}px)` }}
        >
          Built on
        </div>
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
          <div
            className="font-display text-[clamp(3rem,17vw,15rem)] leading-[0.82] uppercase text-lime"
            style={{ transform: `translateX(${-drift * 0.3}px)` }}
          >
            Consistency.
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <Reveal className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            No shortcuts, no gimmicks. FitHouse is built for people who show up — early mornings,
            late nights, and every session in between. Train hard, train supported, keep going.
          </Reveal>

          <div className="relative aspect-[16/10] overflow-hidden grain">
            <img
              src={nightImg}
              alt="FitHouse training floor at night"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover transition-transform duration-700"
              style={{ transform: `scale(${Math.min(1.25, scale)})` }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-lime/25" />
            <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-lime">
              Footage placeholder
            </span>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-border/60 py-4">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center">
              {Array.from({ length: 6 }).map((__, j) => (
                <span key={j} className="flex items-center">
                  <span className="px-6 font-display text-2xl uppercase tracking-[0.12em] md:text-4xl">
                    Show up
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  <span className="px-6 font-display text-2xl uppercase tracking-[0.12em] text-lime md:text-4xl">
                    Open 24/7
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
