import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página inicial com produtos disponíveis', () => {
  cy.visit('/');
});

Given('que adicionei um produto ao carrinho', () => {
  cy.visit('/');
  cy.contains('Add to cart').first().click();
  cy.visit('/view_cart');
});

When('adiciono um produto ao carrinho', () => {
  cy.contains('Add to cart').first().click();
});

When('acesso o carrinho', () => {
  cy.visit('/view_cart');
});

Then('o produto aparece no carrinho com quantidade um', () => {
  cy.contains('Cart').should('be.visible');
  cy.contains('1').should('be.visible');
});

Then('vejo o nome e o preço do produto corretamente', () => {
  cy.contains('Blue Top').should('be.visible');
  cy.contains('Rs. 500').should('be.visible');
});
