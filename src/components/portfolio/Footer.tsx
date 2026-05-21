import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}
