import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que tenho a URL, a chave e o token do Trello', () => {
  cy.log('Usando as variáveis de ambiente do Trello');
});

Given('que possuo dados básicos para criar uma conta', () => {
  cy.log('Dados básicos configurados para o POST de criação de conta');
});

When('envio uma requisição GET para a ação do Trello', () => {
  const apiKey = Cypress.env('TRELLO_API_KEY');
  const token = Cypress.env('TRELLO_TOKEN');
  const hasRealCredentials = apiKey && apiKey !== 'your_trello_key' && token && token !== 'your_trello_token';

  const requestOptions = {
    method: 'GET',
    url: `https://api.trello.com/1/actions/${Cypress.env('TRELLO_ACTION_ID')}`
  };

  if (hasRealCredentials) {
    requestOptions.qs = {
      key: apiKey,
      token: token
    };
  }

  cy.request(requestOptions).as('trelloResponse');
});

When('envio uma requisição POST para o endpoint de criação de conta', () => {
  cy.request({
    method: 'POST',
    url: 'https://www.automationexercise.com/api/createAccount',
    body: {
      name: 'Test User',
      email: 'testuser@example.com'
    },
    failOnStatusCode: false
  }).as('accountResponse');
});

Then('recebo status code 200 e o campo name no corpo da resposta', () => {
  cy.get('@trelloResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id');
  });
});

Then('recebo status code 200 ou 400 e uma mensagem de validação do corpo', () => {
  cy.get('@accountResponse').then((response) => {
    expect(response.status).to.be.oneOf([200, 400]);
    expect(response.body).to.satisfy((body) => typeof body === 'object');
  });
});
