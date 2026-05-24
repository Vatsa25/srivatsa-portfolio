// Standalone Vite config used ONLY for the GitHub Pages static build.
// The main Lovable dev/preview build still uses vite.config.ts (TanStack Start + Cloudflare).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  base: process.env.PAGES_BASE ?? "/srivatsa-portfolio/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
});
