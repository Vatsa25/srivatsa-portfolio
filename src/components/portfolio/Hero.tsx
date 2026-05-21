import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "./data";

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm text-muted-foreground">Hello, I'm</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {PROFILE.name}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {PROFILE.role} · {PROFILE.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {PROFILE.experienceYears} year of experience building scalable, production-ready web applications
          with React, Angular, Node.js, and cloud platforms.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Get in touch
          </a>
          <a
            href={PROFILE.resume}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Download résumé
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
          </span>
          <a href={PROFILE.github} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={PROFILE.linkedin} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
