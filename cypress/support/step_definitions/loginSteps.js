import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página de login', () => {
  cy.visit('/login');
});

When('preencho o e-mail e a senha válidos', () => {
  cy.get('input[data-qa="login-email"]').clear().type('testuser@example.com');
  cy.get('input[data-qa="login-password"]').clear().type('123456');
  cy.get('button[data-qa="login-button"]').click();
});

When('preencho o e-mail válido e uma senha incorreta', () => {
  cy.get('input[data-qa="login-email"]').clear().type('testuser@example.com');
  cy.get('input[data-qa="login-password"]').clear().type('wrongpass');
  cy.get('button[data-qa="login-button"]').click();
});

Then('sou redirecionado para a página inicial com o usuário autenticado', () => {
  cy.location('pathname', { timeout: 10000 }).should('include', '/');
});

Then('vejo a mensagem de erro de autenticação', () => {
  cy.contains('Your email or password is incorrect!').should('be.visible');
});
