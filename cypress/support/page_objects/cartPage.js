class CartPage {
  visit() {
    cy.visit('/view_cart', { timeout: 20000 });
  }

  goToCheckout() {
    cy.visit('/checkout', { timeout: 20000 });
  }
}

export default new CartPage();
