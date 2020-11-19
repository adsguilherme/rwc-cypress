/// <reference types="cypress" />

const faker = require('faker');

const el = require('./elements').ELEMENTS;

import Routes from '../../routes';

class Articles {

    acessarFormularioDeNovaPublicao(){
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario() {
        //Ação/Execução
        //preencher i firnulário do artigo
        cy.get(el.inputTile).type('Bootcamp Title');
        cy.get(el.inputDescription).type('Cypress');
        // Utilizando o faker para preencher o texto de um parágrafo.
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('cypress{enter}').type('cy{enter}').type('recurso de teclas{enter}');
        //cy.pause();
    }
   
    submeterPublicacao(){
       
        //submeter o artigo
        cy.get(el.buttonSubmit).click();
    }
    
    verficarSePublicacaoFoiCriadaComSucesso(){

        // utilizar template string para concatenar
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })
        
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })
        
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.status).to.eq(200)
        })
    }    
}

export default new Articles();

