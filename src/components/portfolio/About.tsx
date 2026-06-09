import { ABOUT, STATS } from "./data";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="About" title="Background" />
        <div className="mt-6 grid gap-8 md:grid-cols-[1.6fr_1fr]">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{ABOUT}</p>
          <dl className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur card-hover"
              >
                <dt className="text-2xl font-semibold text-gradient">
                  {s.value}
                  {s.suffix}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-glow">{eyebrow}</p>
      <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
    </div>
  );
}
