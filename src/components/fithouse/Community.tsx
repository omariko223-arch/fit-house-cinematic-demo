import communityImg from "@/assets/community.jpg";
import { useScrollProgress } from "@/hooks/use-reveal";
import { DemoTag, Reveal, SectionLabel } from "./primitives";

const testimonials = [
  { who: "Member quote placeholder", note: "Member testimonial to be supplied by FitHouse." },
  { who: "Member quote placeholder", note: "Member testimonial to be supplied by FitHouse." },
  { who: "Member quote placeholder", note: "Member testimonial to be supplied by FitHouse." },
];

export function Community() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-ash py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel index="02">Community</SectionLabel>
            <Reveal as="h2" className="mt-6 display text-[clamp(2.4rem,7vw,6rem)]">
              The house
              <br />
              <span className="text-lime">trains together.</span>
            </Reveal>
            <Reveal className="mt-6 max-w-lg text-muted-foreground" delay={80}>
              FitHouse is a room full of people chasing their own targets in the same place.
              Members, coaches, first-timers — same floor, same energy.
            </Reveal>
            <div className="mt-6">
              <DemoTag>Testimonials & transformations are placeholders</DemoTag>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden grain">
            <img
              src={communityImg}
              alt="Community concept placeholder; real FitHouse photography pending"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              style={{ transform: `scale(1.1) translate3d(0, ${(0.5 - progress) * 40}px, 0)` }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-lime/20" />
            <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.16em] text-lime">
              Concept image · real photo pending
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="bg-ash p-7 transition-colors duration-500 hover:bg-ink"
            >
              <span className="font-display text-5xl text-lime/40">“</span>
              <p className="mt-2 font-display text-xl uppercase leading-tight">{t.who}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-9 w-9 shrink-0 rounded-full bg-smoke" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Name to be supplied
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {["Before / after placeholder", "Before / after placeholder"].map((label, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="grid aspect-[16/9] place-items-center bg-ink text-center"
            >
              <div className="px-6">
                <p className="kicker">Transformation slot</p>
                <p className="mt-3 font-display text-2xl uppercase text-muted-foreground">
                  {label}
                </p>
                <p className="mt-2 text-xs text-muted-foreground/70">
                  Real member imagery and consent to be supplied by FitHouse.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
