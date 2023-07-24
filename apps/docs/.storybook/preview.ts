import type { Preview } from "@storybook/react";
import "../node_modules/@themeless-ui/style/dist/style.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Development", "Typography", "Form"],
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
