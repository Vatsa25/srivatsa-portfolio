import { EXPERIENCE } from "./data";
import { SectionHeading } from "./About";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Experience" title="Work History" />
        <div className="mt-8 relative border-l border-border pl-6 space-y-5">
          {EXPERIENCE.map((e) => (
            <article
              key={e.role}
              className="relative rounded-xl border border-border bg-card/60 p-5 backdrop-blur card-hover"
            >
              <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                  <p className="text-sm text-primary-glow">{e.company}</p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">{e.period}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="mr-2 text-primary">▸</span>{p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
