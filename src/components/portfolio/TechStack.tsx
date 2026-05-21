import { motion } from "framer-motion";

const TECH = [
  "React", "Angular", "Node.js", "Express", "TypeScript", "Tailwind",
  "MUI", "Bootstrap", "MySQL", "PostgreSQL", "AWS S3", "Azure",
  "Docker", "Git", "Zustand", "Postman", "REST", "JWT",
];

export function TechStack() {
  const row = [...TECH, ...TECH];
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#00b3ff]">// Tech Stack</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tools I build with</h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap"
        >
          {row.map((t, i) => (
            <span
              key={i}
              className="glass rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
