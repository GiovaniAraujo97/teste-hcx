Feature: Login

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When preencho o e-mail e a senha válidos
    Then sou redirecionado para a página inicial com o usuário autenticado

  Scenario: Login com senha incorreta
    Given que estou na página de login
    When preencho o e-mail válido e uma senha incorreta
    Then vejo a mensagem de erro de autenticação
