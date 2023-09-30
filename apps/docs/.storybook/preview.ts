import type { Preview } from "@storybook/react";
import "../node_modules/@themeless-ui/style/dist/index.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Introduction",
          "Development",
          "Typography",
          "Navigation",
          "Form",
          "Layout",
        ],
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
