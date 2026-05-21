import { EXPERIENCE } from "./data";
import { SectionHeading } from "./About";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Experience" title="Work history" />
        <div className="mt-8 space-y-10">
          {EXPERIENCE.map((e) => (
            <article key={e.role} className="grid gap-4 md:grid-cols-[200px_1fr]">
              <p className="text-sm text-muted-foreground">{e.period}</p>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.company}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
