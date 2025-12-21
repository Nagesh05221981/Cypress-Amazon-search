const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'YOUR_PROJECT_ID', // 👈 from Cypress Cloud
  e2e: {
    baseUrl: 'https://www.amazon.com',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
