/// <reference types="vite/client" />

import fs from "fs";
import { defineConfig } from "vite";

const componentsDirectory = "./src/components";
const componentInputs = fs
  .readdirSync(componentsDirectory)
  .map((file) => `${componentsDirectory}/${file}`);

const tokensDirectory = "./src/tokens";
const tokenInputs = fs
  .readdirSync(tokensDirectory)
  .map((file) => `${tokensDirectory}/${file}`);

const otherInputs = ["src/index.css", "src/tokens.css", "src/components.css"];

export default defineConfig({
  build: {
    rollupOptions: {
      input: [...componentInputs, ...tokenInputs, ...otherInputs],
      output: {
        assetFileNames: () => {
          return "[name].[ext]";
        },
      },
    },
  },
});
