import { PROJECTS } from "./data";
import { SectionHeading } from "./About";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-5 backdrop-blur card-hover"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-primary-glow">{p.subtitle}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
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
