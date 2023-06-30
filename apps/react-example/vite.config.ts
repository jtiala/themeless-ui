/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setup.ts",
    exclude: ["node_modules", "dist"],
    coverage: {
      provider: "v8",
      reporter: ["lcov"],
      reportsDirectory: "reports",
      clean: false,
    },
  },
});
