const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    };

    config.plugins.push(...[
      require('../src/config/unplugin-auto-import'),
      require('../src/config/unplugin-vue-components'),
    ]);
    // keep this if you're doing typescript
    // config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  "addons": [
    "storybook-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          loadSassAfterPostCSS: true,
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}