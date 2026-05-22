import { PROJECTS } from "./data";
import { SectionHeading } from "./About";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:bg-accent hover:border-primary hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{p.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="rounded border border-border bg-secondary px-2 py-0.5 text-[11px] text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
