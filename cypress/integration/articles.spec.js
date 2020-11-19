/// <reference types="cypress" />

import articles from '../support/pages/articles'
// import Routes from '../support/routes'

describe('Publicação', () => {
    // Hooks -> momentos antes e depois do teste

    // before -> antes de todos os testes
    // beforeEach -> antes de cada teste

    //after -> depois de todos os testes
    //afterEach -> depois de cada test

    beforeEach(() => {
        
        //Preparação
        cy.backgroundLogin();   
        articles.acessarFormularioDeNovaPublicao();  
    });

    it('Criar uma nova publicação', () => {
        //Ação        
        articles.preencherFormulario();
        articles.submeterPublicacao();
        
        //Verificação/Validação
        articles.verficarSePublicacaoFoiCriadaComSucesso();

    });
});

// AAA -> Arrange Act Assert
// -> Preparação Ação/Execução Verificação/Validação



