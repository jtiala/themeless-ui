/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "utils",
      fileName: "index",
    },
  },
  test: {
    environment: "node",
    globals: true,
    exclude: ["node_modules", "dist"],
    coverage: {
      provider: "v8",
      reporter: ["lcov"],
      reportsDirectory: "reports",
      clean: false,
    },
  },
});
