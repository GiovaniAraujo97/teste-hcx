class LoginPage {
  visit() {
    cy.visit('/login');
  }

  loginWith(email, password) {
    cy.get('input[data-qa="login-email"]').clear().type(email);
    cy.get('input[data-qa="login-password"]').clear().type(password);
    cy.get('button[data-qa="login-button"]').click();
  }
}

export default new LoginPage();
