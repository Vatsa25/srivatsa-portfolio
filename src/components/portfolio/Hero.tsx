import { Github, Linkedin, Mail, MapPin, ArrowRight, Download } from "lucide-react";
import { PROFILE } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
          Available for new opportunities
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          {PROFILE.role} · <span className="text-foreground">{PROFILE.tagline}</span>
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {PROFILE.experienceYears} years building scalable, production-ready web applications
          with React, Angular, Node.js, and cloud platforms.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={PROFILE.resume}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/40"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" /> {PROFILE.location}
          </span>
          <a href={PROFILE.github} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={PROFILE.linkedin} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-primary-glow/10 blur-3xl" />
      </div>
    </section>
  );
}
