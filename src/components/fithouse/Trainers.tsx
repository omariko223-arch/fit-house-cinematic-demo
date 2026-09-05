import { useEffect, useState } from "react";
import { trainers, type Trainer, WHATSAPP_URL } from "@/lib/fithouse-data";
import { cn } from "@/lib/utils";
import { GhostButton, Reveal, SectionLabel } from "./primitives";

/**
 * MEET THE HOUSE — four structured slots built for real FitHouse trainer
 * portraits. No invented credentials, specialties or biographies: factual
 * fields stay neutral until FitHouse supplies them.
 */
export function Trainers() {
  const [open, setOpen] = useState<Trainer | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="trainers" className="relative bg-ash py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="04">Coaches</SectionLabel>
            <Reveal as="h2" className="mt-6 display text-[clamp(2.4rem,7.5vw,6.5rem)]">
              Meet the <span className="text-lime">house.</span>
            </Reveal>
          </div>
          <span className="inline-flex items-center gap-2 border border-lime/35 bg-lime/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
            <span className="h-1 w-1 rounded-full bg-lime" />
            Portrait slots — awaiting real photos
          </span>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <button
                onClick={() => setOpen(t)}
                className="group relative block h-full w-full overflow-hidden bg-ink text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset"
              >
                <span className="relative block aspect-[3/4] overflow-hidden grain">
                  <img
                    src={t.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  {/* Editorial crop framing for the incoming portrait */}
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                  <span className="absolute inset-4 border border-foreground/10 transition-colors duration-500 group-hover:border-lime/45" />
                  {t.portraitPending && (
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="flex flex-col items-center gap-2 px-4 text-center">
                        <span className="grid h-12 w-12 place-items-center border border-lime/50 font-mono text-sm text-lime">
                          0{i + 1}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Portrait slot
                        </span>
                      </span>
                    </span>
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <span className="block p-5">
                  <span className="block font-display text-2xl uppercase leading-none">{t.name}</span>
                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                    {t.role}
                  </span>
                  <span className="mt-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
                    View profile →
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Names, portraits and credentials to be supplied by FitHouse
        </p>
      </div>

      {/* Profile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Trainer profile"
      >
        <div
          className="absolute inset-0 bg-background/85 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-xl flex-col overflow-y-auto border-l border-border bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          {open && (
            <>
              <div className="relative aspect-[4/3] shrink-0 overflow-hidden grain">
                <img
                  src={open.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                {open.portraitPending && (
                  <span className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Portrait slot — real photo pending
                  </span>
                )}
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close profile"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-border bg-background/70 text-lg backdrop-blur transition-colors hover:border-lime hover:text-lime"
                >
                  ✕
                </button>
              </div>
              <div className="p-7 md:p-10">
                <p className="kicker">{open.role}</p>
                <h3 className="mt-3 display text-4xl md:text-5xl">{open.name}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{open.bio}</p>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Specialties
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {open.specialties.length > 0 ? (
                    open.specialties.map((s) => (
                      <span
                        key={s}
                        className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]"
                      >
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="border border-dashed border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      To be supplied by FitHouse
                    </span>
                  )}
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Credentials
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {["Certification", "Certification", "Experience"].map((c, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-lime" />
                      {c} — to be supplied by FitHouse
                    </li>
                  ))}
                </ul>

                <GhostButton
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 w-full border-lime text-lime"
                >
                  Train With Me
                </GhostButton>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
