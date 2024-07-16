const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://crain-front-end.vercel.app/',
    browser: 'edge',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
