/* eslint-disable no-undef */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": `${path.resolve(__dirname, "./src/components")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets")}`,
      "@contexts": `${path.resolve(__dirname, "./src/contexts")}`,
      "@services": `${path.resolve(__dirname, "./src/services")}`,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
  },
});
