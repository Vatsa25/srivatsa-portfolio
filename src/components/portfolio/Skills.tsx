import { SKILLS } from "./data";
import { SectionHeading } from "./About";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Skills" title="Technologies & tools" />
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.category}>
              <h3 className="text-sm font-semibold text-foreground">{s.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground"
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
