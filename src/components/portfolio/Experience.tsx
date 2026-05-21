import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "./data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#00b3ff]">// Experience</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My <span className="text-gradient-accent">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#00b3ff] via-[#8b5cf6] to-transparent md:left-1/2" />
          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                  i % 2 === 0 ? "md:[&>*:first-child]:order-1" : ""
                }`}
              >
                <div className={`hidden md:block ${i % 2 === 0 ? "md:text-right" : ""}`} />
                <span className="absolute left-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-[#00b3ff] to-[#8b5cf6] ring-4 ring-background md:left-1/2 md:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#00b3ff]">
                    <Briefcase className="h-3.5 w-3.5" />
                    {e.period}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00b3ff]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
