/// <reference types="vite/client" />

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "theme-default",
      fileName: "index",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "theme-default.css";
          }

          return assetInfo.name || "";
        },
      },
    },
  },
});
