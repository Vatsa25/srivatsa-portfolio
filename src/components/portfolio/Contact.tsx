import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { PROFILE } from "./data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const handle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#00b3ff]">// Contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's build something <span className="text-gradient-accent">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to full-time roles, freelance work, and interesting collaborations. Drop a message — I reply fast.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-white">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">Prefer email or socials? I'm one click away.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-[#00b3ff]" /> {PROFILE.email}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#00b3ff]" /> {PROFILE.location}
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
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
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handle}
            className="glass space-y-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Jane Doe" />
              <Field name="email" label="Email" type="email" placeholder="jane@company.com" />
            </div>
            <Field name="message" label="Message" as="textarea" placeholder="Tell me about your project..." />
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.01]"
            >
              {sent ? "Opened your mail app ✓" : (<>Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text", as,
}: { name: string; label: string; placeholder?: string; type?: string; as?: "textarea" }) {
  const cls = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition focus:border-[#00b3ff]/50 focus:bg-white/[0.05]";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} required rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
