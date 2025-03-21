import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Ensures relative paths in production
  build: {
    outDir: "dist",
  },
  plugins: [react(), tailwindcss()],
  server: {
    port: 4000,
  },
});
