class ProductsPage {
  addFirstProductToCart() {
    cy.contains('Add to cart').first().click({ force: true });

    cy.get('body').then(($body) => {
      if ($body.text().includes('View Cart')) {
        cy.contains('View Cart').click({ force: true });
      } else {
        cy.visit('/view_cart');
      }
    });
  }
}

export default new ProductsPage();
