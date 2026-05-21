import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import { PROFILE } from "./data";

const roles = ["Full-Stack Developer", "React & Node.js Engineer", "Angular Developer", "Cloud-Ready Builder"];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = roles[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % roles.length);
          }
        }
      },
      del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="animate-blob absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#3b82f6]/30 blur-3xl" />
        <div className="animate-blob absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-[#8b5cf6]/25 blur-3xl" style={{ animationDelay: "3s" }} />
        <div className="animate-blob absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-[#00b3ff]/20 blur-3xl" style={{ animationDelay: "6s" }} />
      </div>
      <div className="absolute inset-0 opacity-60"><Particles /></div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00b3ff]" />
            <span>Available for new opportunities</span>
            <span className="ml-1 inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex h-10 items-center text-2xl font-medium text-muted-foreground sm:text-3xl"
          >
            <span>I build&nbsp;</span>
            <span className="text-gradient-accent">{typed}</span>
            <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-[#00b3ff]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {PROFILE.role} with {PROFILE.experienceYears} year of experience crafting scalable, production-ready
            web applications. React, Angular, Node.js & cloud — built with care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.03]"
            >
              View my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PROFILE.resume}
              className="glass glass-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-white"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <div className="ml-2 flex items-center gap-2">
              {[
                { Icon: Github, href: PROFILE.github, label: "GitHub" },
                { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass glass-hover grid h-11 w-11 place-items-center rounded-xl text-muted-foreground hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4" /> Based in {PROFILE.location}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="glass relative aspect-square rounded-3xl p-6 glow-purple">
            <div className="absolute -top-3 -left-3 rounded-lg bg-gradient-to-br from-[#00b3ff] to-[#3b82f6] px-3 py-1 text-xs font-semibold text-white">
              srivatsa.dev
            </div>
            <pre className="h-full overflow-hidden rounded-2xl bg-black/40 p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
{`const developer = {
  name: "K. S. Srivatsa",
  role: "Associate IT Consultant",
  stack: {
    frontend: ["React", "Angular",
               "Tailwind", "MUI"],
    backend:  ["Node.js", "Express"],
    db:       ["MySQL", "PostgreSQL"],
    cloud:    ["AWS S3", "Azure"],
  },
  focus: "scalable, clean, fast",
  shipping: true,
};

while (developer.shipping) {
  build();
  learn();
  improve();
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
