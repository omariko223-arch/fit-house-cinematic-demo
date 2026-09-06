import nightImg from "@/assets/night.jpg";
import { useScrollProgress } from "@/hooks/use-reveal";
import { Reveal } from "./primitives";

export function AlwaysOpen() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-44">
      <div className="absolute inset-0 grain">
        <img
          src={nightImg}
          alt="Night-gym concept placeholder; real FitHouse rooftop photography pending"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          style={{ transform: `scale(${1.1 + progress * 0.08})` }}
        />
        <div className="absolute inset-0 bg-ink/75" />
        <span className="absolute bottom-4 right-5 font-mono text-[9px] uppercase tracking-[0.16em] text-lime md:bottom-6 md:right-10">
          Concept image · real photo pending
        </span>
      </div>

      <div className="relative mx-auto max-w-[100rem] px-5 text-center md:px-10">
        <Reveal className="kicker">Twenty four / seven</Reveal>
        <Reveal as="h2" mask className="mt-6 display text-[clamp(2.6rem,9vw,8rem)]">
          No excuses.
          <br />
          <span className="text-lime">We're open 24/7.</span>
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-xl text-muted-foreground" delay={100}>
          5 AM lifts, midnight rounds, post-shift sessions. The door is open whenever your schedule
          says go.
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {["365 days", "24 hours", "One house"].map((s, i) => (
            <Reveal key={s} delay={i * 120} className="text-center">
              <p className="font-display text-4xl uppercase text-lime md:text-6xl">{s.split(" ")[0]}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {s.split(" ").slice(1).join(" ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
