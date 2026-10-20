import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/IzaGithub.io/" : "/",
  plugins: [react({ jsxRuntime: "automatic" }), tailwindcss()],
  server: {
    port: 3000,
    open: false,
  },
  esbuild: {
    jsx: "automatic",
  },
}));
