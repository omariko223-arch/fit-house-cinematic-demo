import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/fithouse-data";
import { DemoTag, Reveal, SectionLabel } from "./primitives";

export function LocationFooter() {
  return (
    <>
      <section id="location" className="relative bg-ash py-24 md:py-32">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <SectionLabel index="06">Find us</SectionLabel>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Reveal as="h2" className="display text-[clamp(2.4rem,7vw,6rem)]">
                El Seyahia
                <br />
                El Rabaa,
                <br />
                <span className="text-lime">6th of October.</span>
              </Reveal>
              <Reveal className="mt-7 max-w-md text-muted-foreground" delay={80}>
                Come by, take a look around, and train a session. Exact address, phone number and
                opening desk hours to be supplied by FitHouse.
              </Reveal>
              <div className="mt-6">
                <DemoTag>Contact links are placeholders</DemoTag>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-lime px-7 py-4 text-center font-display text-sm uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp us
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground/25 px-7 py-4 text-center font-display text-sm uppercase tracking-[0.18em] transition-colors hover:border-lime hover:text-lime"
                >
                  Get directions
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground/25 px-7 py-4 text-center font-display text-sm uppercase tracking-[0.18em] transition-colors hover:border-lime hover:text-lime"
                >
                  Instagram
                </a>
              </div>
            </div>

            <Reveal className="relative min-h-[22rem] overflow-hidden border border-border bg-ink scanlines">
              <div className="absolute inset-0 grid place-items-center text-center">
                <div className="px-6">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-lime/50 pulse-ring">
                    <span className="h-2 w-2 rounded-full bg-lime" />
                  </span>
                  <p className="mt-5 font-display text-2xl uppercase">Map placeholder</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    El Seyahia El Rabaa · 6th of October
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="display text-4xl">
                Fit<span className="text-lime">house</span>
              </p>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Your fitness community in 6th of October. Open 24/7.
              </p>
            </div>
            <div>
              <p className="kicker">Explore</p>
              <ul className="mt-4 space-y-2">
                {[
                  ["#training", "Training"],
                  ["#membership", "Membership"],
                  ["#trainers", "Trainers"],
                  ["#schedule", "Schedule"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-sm text-muted-foreground hover:text-lime">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>El Seyahia El Rabaa, 6th of October</li>
                <li>Phone to be supplied</li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              FitHouse Digital Demo — concept presentation
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Not a live booking system
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
