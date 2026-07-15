const { defineConfig } = require('cypress');
const cucumberPreprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserifyPreprocessor = require('@badeball/cypress-cucumber-preprocessor/browserify').default;

async function setupNodeEvents(on, config) {
  await cucumberPreprocessor.addCucumberPreprocessorPlugin(on, config, {
    stepDefinitions: [
      'cypress/e2e/step_definitions/*.js',
      'cypress/support/step_definitions/*.js'
    ]
  });

  on('file:preprocessor', browserifyPreprocessor(config));

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents,
    screenshotOnRunFailure: true,
    video: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    env: {
      TRELLO_ACTION_ID: process.env.TRELLO_ACTION_ID || '592f11060f95a3d3d46a987a',
      TRELLO_API_KEY: process.env.TRELLO_API_KEY || 'your_trello_key',
      TRELLO_TOKEN: process.env.TRELLO_TOKEN || 'your_trello_token'
    }
  },
});
