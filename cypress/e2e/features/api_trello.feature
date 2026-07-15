Feature: API Trello

  Scenario: Validar GET do Trello e o campo name
    Given que tenho a URL, a chave e o token do Trello
    When envio uma requisição GET para a ação do Trello
    Then recebo status code 200 e o campo name no corpo da resposta

  Scenario: Validar POST de criação de conta no Automation Exercise
    Given que possuo dados básicos para criar uma conta
    When envio uma requisição POST para o endpoint de criação de conta
    Then recebo status code 200 ou 400 e uma mensagem de validação do corpo
