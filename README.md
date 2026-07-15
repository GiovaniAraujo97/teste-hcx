# HCXpert Challenge

Projeto de automação de testes end-to-end com Cypress, Gherkin e Page Object Model para o desafio técnico HCXpert.

## Visão Geral

Projeto de automação de testes end-to-end com Cypress, Gherkin e Page Object Model para o desafio técnico HCXpert.

## Visão Geral
Este projeto implementa cenários BDD para fluxos web e API do desafio, com foco em:
- automação de testes end-to-end em Cypress
- estrutura em Gherkin com Cucumber
- separação por Page Object Model (POM)
- geração de evidências e relatório consolidado

## Stack Utilizada
- JavaScript
- Cypress 13
- Cucumber/Gherkin
- Page Object Model
- Node.js

## Pré-requisitos
- Node.js 18+
- npm

## Instalação
1. Clone o repositório e entre na pasta do projeto.
2. Instale as dependências:
   npm install
3. Copie o arquivo .env.example para .env e ajuste os valores, se necessário.

## Como Executar
### Testes web e API
npm test

### Testes em modo visível
npm run test:headed

### Gerar relatório consolidado
npm run report

## Estrutura do Projeto
- Features BDD: cypress/e2e/features
- Step definitions: cypress/e2e/step_definitions
- Page objects: cypress/support/page_objects
- Fixtures: cypress/fixtures
- Evidências: cypress/evidencias
- Scripts auxiliares: scripts

## Evidências Geradas
- Screenshots automáticos em cypress/screenshots
- Relatório HTML em cypress/evidencias/relatorio.html
- Templates de evidência de API em scripts/templates

## Comandos Úteis
- npm test
- npm run test:headed
- npm run report
- npx cypress run --browser electron --spec "cypress/e2e/features/login.feature"

## Conteúdo do Desafio Coberto
- Login com cenário feliz e erro
- Busca com produto existente e inexistente
- Carrinho com persistência de dados
- Checkout com fluxo válido e validação de campos obrigatórios
- API Trello e criação de conta no Automation Exercise
