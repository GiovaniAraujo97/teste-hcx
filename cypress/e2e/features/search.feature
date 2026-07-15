Feature: Busca de produtos

  Scenario: Buscar produto existente
    Given que estou na página inicial
    When pesquiso por um produto existente
    Then vejo resultados da busca exibidos

  Scenario: Buscar produto inexistente
    Given que estou na página inicial
    When pesquiso por um produto inexistente
    Then vejo a mensagem de nenhum produto encontrado
