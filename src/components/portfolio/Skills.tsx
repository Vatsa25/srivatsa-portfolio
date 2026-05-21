import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench, Layers, Sparkles } from "lucide-react";
import { SKILLS } from "./data";

const ICONS = [Code2, Layers, Database, Cloud, Wrench, Sparkles];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#00b3ff]">// Skills</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My <span className="text-gradient-accent">toolbox</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 text-[#00b3ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{s.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground transition hover:border-[#00b3ff]/40 hover:text-white"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
