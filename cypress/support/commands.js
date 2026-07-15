Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').clear().type(email);
  cy.get('input[data-qa="login-password"]').clear().type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('deleteAccount', () => {
  cy.visit('/');
  cy.contains('a', 'Delete Account').click();
});
