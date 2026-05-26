import { SKILLS } from "./data";
import { SectionHeading } from "./About";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & Tools"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.category}
              className="
                group rounded-2xl border border-white/10
                bg-gradient-to-br from-secondary/60 to-secondary/20
                p-6 backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-2xl hover:shadow-primary/10
              "
            >
              {/* Category Header */}
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {s.category}
                </h3>

                <div className="h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>

              {/* Skills */}
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="
                      rounded-full border border-border/60
                      bg-background/70 px-3 py-1.5
                      text-xs font-medium text-muted-foreground
                      transition-all duration-200
                      hover:border-primary/40
                      hover:bg-primary/10
                      hover:text-primary
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

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
}
