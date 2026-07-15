import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página inicial', () => {
  cy.visit('/');
});

When('pesquiso por um produto existente', () => {
  cy.get('input[data-qa="search-box"]').type('Blue Top');
  cy.get('button#submit_search').click();
});

When('pesquiso por um produto inexistente', () => {
  cy.get('input[data-qa="search-box"]').type('ProdutoInexistente');
  cy.get('button#submit_search').click();
});

Then('vejo resultados da busca exibidos', () => {
  cy.contains('Blue Top').should('be.visible');
});

Then('vejo a mensagem de nenhum produto encontrado', () => {
  cy.contains('Searched Products').should('be.visible');
});
