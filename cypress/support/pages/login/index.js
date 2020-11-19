const el = require('./elements').ELEMENTS;

class Login {
    acessarLogin() {    
        //Acessar a página de login
        cy.visit('login');
    }
    
    preencherFormulario() {
        //Preencher o formulário
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submeterFormulario() {
        // Submeter o formulário
        cy.get(el.buttonSubmit).click();
    }
}

export default new Login();

