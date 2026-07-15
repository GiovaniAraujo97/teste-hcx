import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../page_objects/homePage';
import productsPage from '../page_objects/productsPage';
import cartPage from '../page_objects/cartPage';

Given('que tenho um produto no carrinho', () => {
  homePage.visit();
  productsPage.addFirstProductToCart();
  cartPage.visit();
});

When('preencho os dados de cobrança e confirmo a compra', () => {
  cartPage.goToCheckout();
  cy.contains('Place Order').click({ force: true });
  cy.get('body').then(($body) => {
    if ($body.find('input[name="name"]').length > 0) {
      cy.get('input[name="name"]').clear().type('Test User');
      cy.get('input[name="email"]').clear().type('testuser@example.com');
      cy.get('textarea[name="message"]').clear().type('Pedido de teste');
      cy.contains('Pay and Confirm Order').click({ force: true });
    } else {
      cy.log('Formulário de checkout indisponível na resposta atual');
    }
  });
});

When('deixo campos obrigatórios em branco', () => {
  cartPage.goToCheckout();
});

Then('a compra é finalizada com sucesso', () => {
  cy.get('body').then(($body) => {
    const hasOrderConfirmation = $body.text().includes('Order Placed!') || $body.text().includes('Congratulations!') || $body.text().includes('Your order has been placed successfully');
    expect(hasOrderConfirmation).to.be.true;
  });
});

Then('vejo mensagens de erro e não consigo finalizar a compra', () => {
  cy.get('body').then(($body) => {
    const text = $body.text().toLowerCase();
    const hasValidationMessage = text.includes('required') || text.includes('error') || text.includes('please') || text.includes('warning');
    expect(hasValidationMessage).to.be.true;
  });
});
