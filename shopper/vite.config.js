import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 4000,
  },
  build: {
    rollupOptions: {
      external: ["mongoose", "express"], // Prevent backend modules from being bundled
    },
  },
});
