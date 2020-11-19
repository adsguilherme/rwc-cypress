/// <reference types="cypress" />


// Importando o faker
const faker = require('faker')

describe('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('register');        

        cy.get('input[ng-model*=username]').type(faker.name.firstName() + faker.name.lastName());
        cy.get('input[ng-model*=email]').type(faker.internet.email());
        cy.get('input[ng-model*=password]').type(faker.internet.password());
        cy.get('button.btn-primary').click();
    });
});


