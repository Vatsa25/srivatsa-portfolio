import { EXPERIENCE } from "./data";
import { SectionHeading } from "./About";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Experience" title="Work History" />

        <div className="mt-12 space-y-12">
          {EXPERIENCE.map((e) => (
            <article
              key={e.role}
              className="grid gap-4 md:grid-cols-[180px_1fr]"
            >
              {/* Period */}
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {e.period}
                </p>
              </div>

              {/* Content */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {e.role}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {e.company}
                  </p>
                </div>

                <ul className="mt-4 space-y-3">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
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
