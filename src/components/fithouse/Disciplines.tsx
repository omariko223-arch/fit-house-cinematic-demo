import { useState } from "react";
import { disciplines } from "@/lib/fithouse-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionLabel } from "./primitives";

export function Disciplines() {
  const [active, setActive] = useState(disciplines[0]!.id);
  const current = disciplines.find((d) => d.id === active) ?? disciplines[0]!;

  return (
    <section id="training" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <SectionLabel index="01">Training disciplines</SectionLabel>
        <Reveal as="h2" className="mt-6 display text-[clamp(2.5rem,8vw,7rem)]">
          Pick your <span className="text-lime">weapon.</span>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          {/* Interactive list */}
          <div className="border-t border-border">
            {disciplines.map((d, i) => (
              <button
                key={d.id}
                onMouseEnter={() => setActive(d.id)}
                onFocus={() => setActive(d.id)}
                onClick={() => setActive(d.id)}
                className={cn(
                  "group relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 text-left transition-colors md:py-8",
                  active === d.id ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "shrink-0 font-mono text-[10px] tracking-[0.2em] transition-colors",
                    active === d.id ? "text-lime" : "text-muted-foreground/60",
                  )}
                >
                  0{i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-[clamp(1.6rem,5vw,3.2rem)] uppercase leading-none">
                    {d.title}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block overflow-hidden text-sm text-muted-foreground transition-all duration-500",
                      active === d.id ? "max-h-10 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {d.line}
                  </span>
                </span>
                <span
                  className={cn(
                    "shrink-0 font-mono text-lg transition-transform duration-300",
                    active === d.id ? "translate-x-0 text-lime" : "-translate-x-2 opacity-0",
                  )}
                >
                  →
                </span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-lime transition-all duration-500",
                    active === d.id ? "w-full" : "w-0",
                  )}
                />
                {/* mobile inline media */}
                <span className="col-span-3 mt-4 block lg:hidden">
                  {active === d.id && (
                    <span className="relative block aspect-[16/10] overflow-hidden grain">
                      <img
                        src={d.image}
                        alt={d.title}
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className="h-full w-full animate-[fade-in_0.5s_ease-out] object-cover"
                      />
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Hover-driven media */}
          <div className="sticky top-24 hidden h-[36rem] lg:block">
            <div className="relative h-full overflow-hidden grain edge-glow">
              {disciplines.map((d) => (
                <img
                  key={d.id}
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                    active === d.id ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-3xl uppercase text-lime">{current.title}</p>
                <ul className="mt-3 space-y-1.5">
                  {current.points.map((p) => (
                    <li
                      key={p}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      — {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
