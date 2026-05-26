import { SKILLS } from "./data";
import { SectionHeading } from "./About";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & Tools"
        />

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          Technologies and tools I use to build scalable, modern, and
          user-focused applications.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.category}
              className="
                rounded-2xl border border-border
                bg-card p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-lg
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  {s.category}
                </h3>

                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-border" />

              {/* Skills */}
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="
                      rounded-md border border-border
                      bg-secondary px-3 py-1.5
                      text-xs font-medium text-muted-foreground
                      transition-colors duration-200
                      hover:border-primary/30
                      hover:text-foreground
                    "
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
