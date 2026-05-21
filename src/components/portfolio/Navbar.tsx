import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#00b3ff] via-[#3b82f6] to-[#8b5cf6]"
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className={`glass flex items-center justify-between rounded-2xl px-5 py-3 ${scrolled ? "glow-blue" : ""}`}>
            <a href="#home" className="flex items-center gap-2 font-display font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#00b3ff] to-[#8b5cf6] text-sm font-bold text-white">
                KS
              </span>
              <span className="text-gradient text-lg">Srivatsa</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="hidden rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.03] md:inline-block"
            >
              Hire me
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
}
