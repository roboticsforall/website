import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from 'path'

export default defineConfig({
  plugins: [preact()],
  resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        '@': path.resolve(__dirname, './src'),
      }
  }
});
