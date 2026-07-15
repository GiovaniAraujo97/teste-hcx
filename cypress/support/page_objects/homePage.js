class HomePage {
  visit() {
    cy.visit('/');
  }

  search(product) {
    cy.get('body').then(($body) => {
      if ($body.find('input#search_product').length > 0) {
        cy.get('input#search_product').clear().type(product);
        cy.get('button#submit_search').click();
      } else {
        cy.visit(`/products?search=${product}`);
      }
    });
  }
}

export default new HomePage();
