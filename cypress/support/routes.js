class Routes {
    
    //objeto
    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments'
    }

    //método
    init(){
         // POST 200 /api/articles
        // GET 200 /api/articles/bootcamp-title-6wyznx
        // GET 200 /api/articles/bootcamp-title-6wyznx/comments

        // ** não importa qual será o host. Ai informamos apenas a rota (/api/articles), tendo um reaproveitamento para múltiplos ambientes. 

        // **/api/articles/bootcamp-title-** , no final foi utilizad o **, pois olhando no CRunner, no após a palavra title gerou o valor 6wyznx, que é dinâmico. E a uma nova execução de teste, esse valor será alterado, por esse motivo devemos usar o **.
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/bootcamp-title-**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/bootcamp-title-**/comments').as(this.as.getArticlesTitleComments);
    }
}

export default new Routes();

