import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { PROFILE } from "./data";
import { SectionHeading } from "./About";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const whatsappHref = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
    "Hi Srivatsa, I came across your portfolio and would like to connect."
  )}`;

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Contact" title="Let's work together" />
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Open to full-time roles, freelance work, and collaborations. Send a message below, email me, or ping me on WhatsApp.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label htmlFor="name" className="text-xs font-medium text-foreground">Name</label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-foreground">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium text-foreground">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Send className="h-4 w-4" /> Send email
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" /> Message on WhatsApp
              </a>
            </div>
          </form>

          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 text-foreground hover:underline">
                <Mail className="h-4 w-4" /> {PROFILE.email}
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:underline">
                <MessageCircle className="h-4 w-4" /> WhatsApp
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
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
}
