import { useEffect, useRef, useState } from "react";
import { tourScenes } from "@/lib/fithouse-data";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-reveal";
import { Reveal, SectionLabel } from "./primitives";

/**
 * EXPLORE THE HOUSE — concept walkthrough.
 * Scenes are wide panoramic-style stills, not verified 360° captures.
 * Swap `tourScenes[].image` for true equirectangular panoramas later; the
 * pan/drag interaction and hotspots keep working unchanged.
 */
export function VirtualTour() {
  const [index, setIndex] = useState(0);
  const [pan, setPan] = useState(0.5); // 0..1 horizontal position
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<{ x: number; pan: number } | null>(null);
  const reduced = usePrefersReducedMotion();
  const scene = tourScenes[index] ?? tourScenes[0];

  useEffect(() => {
    setPan(0.5);
  }, [index]);

  const move = (clientX: number) => {
    const start = startRef.current;
    const el = frameRef.current;
    if (!start || !el) return;
    const delta = (clientX - start.x) / el.clientWidth;
    setPan(Math.min(1, Math.max(0, start.pan - delta * 1.6)));
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => move(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging]);

  const step = (dir: -1 | 1) => setIndex((i) => (i + dir + tourScenes.length) % tourScenes.length);

  if (!scene) return null;

  return (
    <section id="tour" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="03">Explore the house</SectionLabel>
            <Reveal as="h2" className="mt-6 display text-[clamp(2.4rem,7.5vw,6.5rem)]">
              Walk the <span className="text-lime">floor.</span>
            </Reveal>
          </div>
          <span className="inline-flex items-center gap-2 border border-lime/35 bg-lime/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
            <span className="h-1 w-1 rounded-full bg-lime" />
            Concept preview — not a 360° capture
          </span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Viewer */}
          <div
            ref={frameRef}
            onPointerDown={(e) => {
              startRef.current = { x: e.clientX, pan };
              setDragging(true);
            }}
            className={cn(
              "relative aspect-[16/10] touch-pan-y select-none overflow-hidden grain edge-glow sm:aspect-[16/9] lg:aspect-[21/9]",
              dragging ? "cursor-grabbing" : "cursor-grab",
            )}
          >
            {tourScenes.map((s, i) => (
              <img
                key={s.id}
                src={s.image}
                alt={`${s.name} concept placeholder; not verified FitHouse photography`}
                loading="lazy"
                width={1920}
                height={768}
                draggable={false}
                style={{
                  objectPosition: `${pan * 100}% 50%`,
                  transform: reduced ? undefined : `scale(1.06)`,
                }}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  i === index ? "opacity-100" : "opacity-0",
                  dragging ? "" : "transition-[object-position,opacity] duration-500",
                )}
              />
            ))}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
            <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />

            {/* Hotspots to neighbouring areas */}
            <button
              onClick={() => step(-1)}
              aria-label="Previous area"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-border bg-background/60 font-mono backdrop-blur transition-colors hover:border-lime hover:text-lime md:left-6"
            >
              ←
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next area"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-border bg-background/60 font-mono backdrop-blur transition-colors hover:border-lime hover:text-lime md:right-6"
            >
              →
            </button>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 md:p-7">
              <div className="min-w-0">
                <p className="font-display text-2xl uppercase leading-none text-lime md:text-4xl">
                  {scene.name}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {scene.caption}
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Drag to look around
              </p>
            </div>

            {/* Pan indicator */}
            <div className="absolute left-1/2 top-4 hidden h-px w-40 -translate-x-1/2 bg-foreground/20 md:block">
              <span
                className="absolute -top-1 h-2 w-2 bg-lime transition-[left] duration-150"
                style={{ left: `${pan * 100}%` }}
              />
            </div>
          </div>

          {/* Scene selector */}
          <div className="flex flex-col border-t border-border">
            {tourScenes.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-current={i === index}
                className={cn(
                  "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-4 text-left transition-colors",
                  i === index ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-[0.2em]",
                    i === index ? "text-lime" : "text-muted-foreground/60",
                  )}
                >
                  0{i + 1}
                </span>
                <span className="min-w-0 truncate font-display text-lg uppercase tracking-wide">
                  {s.name}
                </span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 transition-colors",
                    i === index ? "bg-lime" : "bg-border group-hover:bg-foreground/40",
                  )}
                />
              </button>
            ))}
            <p className="mt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
              Demo scenes only. Real FitHouse photography is not yet available in this project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
