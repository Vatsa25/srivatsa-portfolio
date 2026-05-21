import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./data";
import { SectionHeading } from "./About";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Contact" title="Let's work together" />
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Open to full-time roles, freelance work, and collaborations. The fastest way to reach me is by email.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 text-foreground hover:underline">
              <Mail className="h-4 w-4" /> {PROFILE.email}
            </a>
          </li>
          <li>
            <a href={PROFILE.github} className="inline-flex items-center gap-2 text-foreground hover:underline">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </li>
          <li>
            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 text-foreground hover:underline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
