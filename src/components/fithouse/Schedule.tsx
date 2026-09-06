import { useMemo, useState } from "react";
import { classTypes, days, schedule } from "@/lib/fithouse-data";
import { cn } from "@/lib/utils";
import { DemoTag, Reveal, SectionLabel } from "./primitives";

export function Schedule() {
  const [day, setDay] = useState(days[0]);
  const [type, setType] = useState("All");

  const rows = useMemo(
    () => schedule.filter((s) => s.day === day && (type === "All" || s.type === type)),
    [day, type],
  );

  return (
    <section id="schedule" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <SectionLabel index="05">Weekly schedule</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal as="h2" className="display text-[clamp(2.4rem,7vw,6rem)]">
            This week at <span className="text-lime">the house.</span>
          </Reveal>
          <DemoTag>Placeholder schedule — demo data</DemoTag>
        </div>

        {/* Day switcher */}
        <div className="mt-12 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div className="flex min-w-max gap-px bg-border">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={cn(
                  "relative flex-1 px-6 py-4 font-display text-lg uppercase tracking-[0.1em] transition-colors md:px-10",
                  day === d
                    ? "bg-lime text-primary-foreground"
                    : "bg-ink text-muted-foreground hover:text-foreground",
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Type filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {classTypes.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={cn(
                "border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                type === t
                  ? "border-lime text-lime"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Rows */}
        <div className="mt-8 border-t border-border">
          {rows.length === 0 && (
            <p className="py-10 font-mono text-sm text-muted-foreground">
              No demo sessions for this filter.
            </p>
          )}
          {rows.map((s, i) => (
            <div
              key={`${s.day}-${s.time}-${s.name}`}
              style={{ animationDelay: `${i * 45}ms` }}
              className="group grid animate-[fade-in_0.5s_ease-out_both] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-2 border-b border-border py-5 transition-colors hover:bg-ink md:grid-cols-[7rem_minmax(0,1fr)_10rem_8rem_auto] md:py-6"
            >
              <span className="font-display text-2xl leading-none text-lime md:text-3xl">
                {s.time}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-xl uppercase leading-none md:text-2xl">
                  {s.name}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:hidden">
                  {s.type} · {s.coach} · {s.duration}
                </span>
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:block">
                {s.type}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:block">
                {s.coach}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:block">
                {s.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
