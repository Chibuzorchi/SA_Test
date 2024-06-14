const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY: '8045c25cdb3fb85c83f1aedd99a2bbd6627774ac8966d550ba87f004a3070a2f'
  },
  e2e: {
    watchForFileChanges: false,
    viewportHeight: 900,
    viewportWidth: 1400,
    baseUrl: 'https://smartapproaches.org/dashboard/',
    setupNodeEvents(on, config) {

    },
  },
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000
});
