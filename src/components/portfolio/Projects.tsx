import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "./data";

export function Projects() {
  const allTech = useMemo(() => {
    const s = new Set<string>();
    PROJECTS.forEach((p) => p.stack.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.stack.includes(filter));

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#00b3ff]">// Projects</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Selected <span className="text-gradient-accent">work</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTech.slice(0, 9).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  filter === t
                    ? "border-transparent bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white"
                    : "border-white/10 text-muted-foreground hover:border-[#00b3ff]/40 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                whileHover={{ y: -8 }}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#3b82f6]/30 to-[#8b5cf6]/30 blur-3xl transition group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#00b3ff]">{p.subtitle}</p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">{p.title}</h3>
                    </div>
                    <div className="flex gap-2 opacity-0 transition group-hover:opacity-100">
                      <a aria-label="GitHub" href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10">
                        <Github className="h-4 w-4" />
                      </a>
                      <a aria-label="Live" href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-gradient-to-r from-[#00b3ff] to-[#8b5cf6]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
