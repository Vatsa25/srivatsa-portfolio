import { SKILLS } from "./data";
import { SectionHeading } from "./About";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Skills" title="Technologies & Tools" />
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Tools I use to build scalable, modern, user-focused applications.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.category}
              className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur card-hover"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                <h3 className="text-sm font-semibold text-foreground">{s.category}</h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-secondary/80 px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
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
