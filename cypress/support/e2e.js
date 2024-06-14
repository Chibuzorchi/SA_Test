import './commands';
import 'cypress-mailslurp'
import 'cypress-xpath';
import '@faker-js/faker';

// Global exception handler
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the elementorFrontendConfig error
    if (err.message.includes('elementorFrontendConfig is not defined')) {
      return false;
    }
    // Let other exceptions fail the test
    return true;
  });
