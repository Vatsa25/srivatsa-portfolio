import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

import { PROFILE } from "./data";
import { SectionHeading } from "./About";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const whatsappHref = `https://wa.me/${
    PROFILE.whatsapp
  }?text=${encodeURIComponent(
    "Hi Srivatsa, I came across your portfolio and would like to connect."
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
        />

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Open to freelance projects, full-time roles, and collaborations.
          Feel free to send a message or connect through social platforms.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-card/60 p-8 shadow-xl backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="
                      h-12 w-full rounded-xl border border-border
                      bg-background/60 px-4 text-sm text-foreground
                      outline-none transition-all
                      focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="
                      h-12 w-full rounded-xl border border-border
                      bg-background/60 px-4 text-sm text-foreground
                      outline-none transition-all
                      focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>

                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="
                    w-full rounded-xl border border-border
                    bg-background/60 px-4 py-3 text-sm text-foreground
                    outline-none transition-all
                    focus:border-primary
                    focus:ring-2 focus:ring-primary/20
                  "
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  className="
                    inline-flex items-center gap-2 rounded-xl
                    bg-primary px-5 py-3 text-sm font-medium
                    text-primary-foreground transition-all
                    hover:scale-[1.02]
                    hover:opacity-90
                  "
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 rounded-xl
                    border border-border bg-secondary/70
                    px-5 py-3 text-sm font-medium
                    text-foreground transition-all
                    hover:bg-accent
                  "
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: PROFILE.email,
                href: `mailto:${PROFILE.email}`,
              },
              {
                icon: Github,
                label: "GitHub",
                value: "View Profile",
                href: PROFILE.github,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Connect with me",
                href: PROFILE.linkedin,
              },
              // {
              //   icon: MessageCircle,
              //   label: "WhatsApp",
              //   value: "Chat instantly",
              //   href: whatsappHref,
              // },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-4 rounded-2xl
                  border border-border bg-card/50 p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl bg-primary/10 text-primary
                  "
                >
                  <item.icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      {/* <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full bg-[#25D366]
          text-white shadow-2xl
          transition-all duration-300
          hover:scale-110
        "
      >
        <MessageCircle className="h-6 w-6" />
      </a> */}

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
}
