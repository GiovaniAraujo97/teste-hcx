Feature: Checkout

  Scenario: Finalizar compra com dados obrigatórios válidos
    Given que tenho um produto no carrinho
    When preencho os dados de cobrança e confirmo a compra
    Then a compra é finalizada com sucesso

  Scenario: Impedir checkout com campos obrigatórios ausentes
    Given que tenho um produto no carrinho
    When deixo campos obrigatórios em branco
    Then vejo mensagens de erro e não consigo finalizar a compra
