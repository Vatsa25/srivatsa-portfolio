import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#00b3ff] to-[#8b5cf6] text-xs font-bold text-white">
            KS
          </span>
          <span>© {new Date().getFullYear()} {PROFILE.name}. Built with</span>
          <Heart className="h-3.5 w-3.5 fill-[#8b5cf6] text-[#8b5cf6]" />
          <span>and React.</span>
        </div>
        <div className="flex items-center gap-2">
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
              className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
