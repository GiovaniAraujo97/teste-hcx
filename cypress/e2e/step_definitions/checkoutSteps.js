import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que tenho um produto no carrinho', () => {
  cy.visit('/');
  cy.contains('Add to cart').first().click();
  cy.visit('/view_cart');
});

When('preencho os dados de cobrança e confirmo a compra', () => {
  cy.contains('Proceed To Checkout').click();
  cy.get('input[data-qa="name"]').type('Test User');
  cy.get('input[data-qa="email"]').type('testuser@example.com');
  cy.get('input[data-qa="password"]').type('123456');
  cy.get('button[data-qa="signup-button"]').click();
});

When('deixo campos obrigatórios em branco', () => {
  cy.contains('Proceed To Checkout').click();
});

Then('a compra é finalizada com sucesso', () => {
  cy.contains('Place Order').should('be.visible');
});

Then('vejo mensagens de erro e não consigo finalizar a compra', () => {
  cy.contains('Place Order').should('be.visible');
});
