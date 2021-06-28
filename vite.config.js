import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
