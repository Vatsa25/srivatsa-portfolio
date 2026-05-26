import { EXPERIENCE } from "./data";
import { SectionHeading } from "./About";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="Experience" title="Work History" />

        <div className="mt-10 space-y-6">
          {EXPERIENCE.map((e) => (
            <article
              key={e.role}
              className="rounded-lg border border-border bg-card p-6"
            >
              {/* Header */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {e.role}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {e.company}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {e.period}
                </p>
              </div>

              {/* Points */}
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    • {p}
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
