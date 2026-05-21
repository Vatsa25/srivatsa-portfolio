import { ABOUT, STATS } from "./data";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="About" title="Background" />
        <div className="mt-8 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <p className="text-base leading-relaxed text-muted-foreground">{ABOUT}</p>
          <dl className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold text-foreground">
                  {s.value}
                  {s.suffix}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
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
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
    </div>
  );
}
