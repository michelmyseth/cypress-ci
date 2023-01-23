const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1tjgxx',
    e2e: {
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
