import { useState } from "react";
import { plans } from "@/lib/fithouse-data";
import { cn } from "@/lib/utils";
import { DemoTag, GreenButton, Reveal, SectionLabel } from "./primitives";

const DEMO_CODE = "FH10";

export function Membership() {
  const [selected, setSelected] = useState("full");
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState("");

  const apply = () => {
    if (code.trim().toUpperCase() === DEMO_CODE) {
      setApplied(true);
      setError("");
    } else {
      setApplied(false);
      setError("Demo code not recognised. Try FH10.");
    }
  };

  return (
    <section id="membership" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <SectionLabel index="03">Membership</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal as="h2" className="display text-[clamp(2.4rem,7.5vw,6.5rem)]">
            Choose your <span className="text-lime">membership.</span>
          </Reveal>
          <DemoTag>Demo pricing — real plans from FitHouse</DemoTag>
        </div>

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
          {plans.map((plan, i) => {
            const isSel = selected === plan.id;
            const discounted =
              applied && plan.demoPrice ? Math.round(plan.demoPrice * 0.9) : plan.demoPrice;
            return (
              <Reveal key={plan.id} delay={i * 90}>
                <button
                  onClick={() => setSelected(plan.id)}
                  aria-pressed={isSel}
                  className={cn(
                    "group relative flex h-full w-full flex-col p-8 text-left transition-all duration-500",
                    isSel ? "bg-ink" : "bg-background hover:bg-ink/60",
                  )}
                >
                  {isSel && <span className="absolute inset-x-0 top-0 h-0.5 bg-lime" />}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-display text-3xl uppercase leading-none">{plan.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
                    </div>
                    <span
                      className={cn(
                        "mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                        isSel ? "border-lime bg-lime" : "border-border",
                      )}
                    >
                      {isSel && <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />}
                    </span>
                  </div>

                  <div className="mt-8 min-h-[4.5rem]">
                    {plan.demoPrice ? (
                      <div className="flex items-end gap-3">
                        <span
                          className={cn(
                            "font-display text-5xl leading-none transition-colors duration-500",
                            applied ? "text-lime" : "text-foreground",
                          )}
                        >
                          {discounted}
                        </span>
                        <span className="pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          EGP / month · demo
                        </span>
                        {applied && (
                          <span className="pb-1 font-mono text-xs text-muted-foreground line-through">
                            {plan.demoPrice}
                          </span>
                        )}
                      </div>
                    ) : (
                      <p className="font-display text-xl uppercase leading-tight text-muted-foreground">
                        Current plan details available from FitHouse
                      </p>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-lime" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={cn(
                      "mt-8 inline-flex font-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                      isSel ? "text-lime" : "text-muted-foreground",
                    )}
                  >
                    {isSel ? "Selected" : "Select plan"}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Promo code + CTA */}
        <div className="mt-12 grid gap-8 border border-border bg-ink p-7 md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
          <div>
            <p className="kicker">Trainer promo code</p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Demo only: enter a trainer code to preview how a discount would apply. Try{" "}
              <span className="font-mono text-lime">FH10</span>.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError("");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && apply()}
                  placeholder="ENTER CODE"
                  aria-label="Trainer promo code"
                  className={cn(
                    "w-full border bg-background px-4 py-4 font-mono text-sm uppercase tracking-[0.2em] outline-none transition-colors placeholder:text-muted-foreground/50",
                    applied ? "border-lime text-lime" : "border-border focus:border-lime",
                  )}
                />
                {applied && (
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                    −10% applied
                  </span>
                )}
              </div>
              <button
                onClick={apply}
                className="border border-lime px-6 py-4 font-display text-sm uppercase tracking-[0.18em] text-lime transition-colors hover:bg-lime hover:text-primary-foreground"
              >
                Apply
              </button>
            </div>
            <div className="mt-3 min-h-5">
              {error && <p className="font-mono text-[11px] text-destructive">{error}</p>}
              {applied && (
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
                  Demo discount applied to demo pricing only
                </p>
              )}
            </div>
          </div>

          <div className="border-l-0 border-t border-border pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Selected
            </p>
            <p className="mt-2 font-display text-4xl uppercase text-lime">
              {plans.find((p) => p.id === selected)?.name}
            </p>
            <GreenButton
              className="mt-6 w-full"
              onClick={() => document.getElementById("location")?.scrollIntoView()}
            >
              Join Now
            </GreenButton>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Demo flow — no payment is taken
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
