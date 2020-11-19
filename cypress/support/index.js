// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration

// -----------------------------------------------------------

// PT-BR
// Este exemplo support / index.js é processado e
// carregado automaticamente antes de seus arquivos de teste.
//
// Este é um ótimo lugar para colocar a configuração global e
// comportamento que modifica o Cypress.
//
// Você pode alterar a localização deste arquivo ou desligar
// servindo automaticamente arquivos de suporte com o
// Opção de configuração 'supportFile'.
//
// Você pode ler mais aqui:
// https://on.cypress.io/configuration

// ***********************************************************
Cypress.Commands.add('backgroundLogin', () => {
     // Processo de login em background
        // 1. realizar uma requisição do tipo POST com email e senha
        // 2. capturar o token que é recebido da nossa requisição
        // 3. usar o token recebido para salvar no localstorage
        cy.request({
            method: 'POST',
            // Esse trecho de código url: `${Cypress.config().apiUrl} é o que chamamos de iterpolação de string (Template String).
            // No arquivo cypress.json foi configurado "apiUrl": "https://conduit.productionready.io/api/", e no caso passando ${Cypress.config().apiUrl}, o .apiUrl é a configuração feita dentro do arquivo cypress.json.
            url: `${Cypress.config().apiUrl}users/login`,
            body: {
                user: {	
                    email: 'gscode@gscode.com',
                    password: '12345678'
                }
            }
        // O uso do .then serve para capturar as informaçoes que vão ser recuperadas do request.
        }).then((loginResponse) => {
            console.log(loginResponse.body)
            cy.log(loginResponse.body.user.token)
            cy.log(loginResponse.body.user.username)
            cy.log(loginResponse.body.user.email)

            // Setar variável no localstorage
            // oneBeforeLoad irá pegar esse token
            cy.visit('/', {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
                }
            })
        })
})

import Routes from '../support/routes'

beforeEach(() => {
    Routes.init()
});

