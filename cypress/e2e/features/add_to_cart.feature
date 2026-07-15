Feature: Carrinho

  Scenario: Adicionar produto ao carrinho a partir da listagem
    Given que estou na página inicial com produtos disponíveis
    When adiciono um produto ao carrinho
    Then o produto aparece no carrinho com quantidade um

  Scenario: Validar persistência de dados no carrinho
    Given que adicionei um produto ao carrinho
    When acesso o carrinho
    Then vejo o nome e o preço do produto corretamente
