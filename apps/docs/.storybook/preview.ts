import type { A11yParameters } from "@storybook/addon-a11y";
import type { Preview } from "@storybook/react";
import { Rule, getRules } from "axe-core";
import "../node_modules/@themeless-ui/style/dist/index.css";

const enabledTags = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
];

const enabledRules: Rule[] = getRules(enabledTags).map((ruleMetadata) => ({
  id: ruleMetadata.ruleId,
  enabled: true,
}));

const a11y: A11yParameters = {
  config: {
    rules: enabledRules,
  },
};

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
    a11y,
  },
};

export default preview;
