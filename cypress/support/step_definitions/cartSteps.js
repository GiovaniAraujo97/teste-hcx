import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../page_objects/homePage';
import productsPage from '../page_objects/productsPage';
import cartPage from '../page_objects/cartPage';

Given('que estou na página inicial com produtos disponíveis', () => {
  homePage.visit();
});

Given('que adicionei um produto ao carrinho', () => {
  homePage.visit();
  productsPage.addFirstProductToCart();
  cartPage.visit();
});

When('adiciono um produto ao carrinho', () => {
  productsPage.addFirstProductToCart();
});

When('acesso o carrinho', () => {
  cartPage.visit();
});

Then('o produto aparece no carrinho com quantidade um', () => {
  cartPage.visit();
  cy.contains('Blue Top').should('be.visible');
});

Then('vejo o nome e o preço do produto corretamente', () => {
  cartPage.visit();
  cy.contains('Blue Top').should('be.visible');
  cy.contains('Rs. 500').should('be.visible');
});
