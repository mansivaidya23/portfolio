import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites need a repo subpath; user sites (username.github.io) use "/".
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
    open: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
