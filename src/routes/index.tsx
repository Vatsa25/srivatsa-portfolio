import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/portfolio/Navbar";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Experience } from "../components/portfolio/Experience";
import { Projects } from "../components/portfolio/Projects";
import { TechStack } from "../components/portfolio/TechStack";
import { Achievements } from "../components/portfolio/Achievements";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <TechStack />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
