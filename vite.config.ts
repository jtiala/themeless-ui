/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ThemelessUI",
      fileName: "themeless-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "themeless-ui.css";
          }

          return assetInfo.name || "";
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "src/test/setup.ts",
    exclude: ["node_modules", "dist", "storybook-static"],
    coverage: {
      provider: "c8",
      reporter: ["lcov"],
      reportsDirectory: "reports",
      clean: false,
    },
  },
});
