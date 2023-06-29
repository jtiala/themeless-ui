/* eslint-disable @typescript-eslint/no-var-requires */
const { injectAxe, checkA11y, configureAxe } = require("axe-playwright");
const { getStoryContext } = require("@storybook/test-runner");

const config = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    const storyContext = await getStoryContext(page, context);

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      verbose: false,
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

module.exports = config;
