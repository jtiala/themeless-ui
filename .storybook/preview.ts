import type { Preview } from "@storybook/react";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Typography", "Form"],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
