/// <reference types="vite/client" />

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.ts"],
      name: "web-components",
      fileName: "index",
    },
  },
});
