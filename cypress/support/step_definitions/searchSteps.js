import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../page_objects/homePage';

Given('que estou na página inicial', () => {
  homePage.visit();
});

When('pesquiso por um produto existente', () => {
  homePage.search('Blue Top');
});

When('pesquiso por um produto inexistente', () => {
  homePage.search('ProdutoInexistente');
});

Then('vejo resultados da busca exibidos', () => {
  cy.contains('Blue Top').should('be.visible');
});

Then('vejo a mensagem de nenhum produto encontrado', () => {
  cy.contains('Searched Products').should('be.visible');
});
