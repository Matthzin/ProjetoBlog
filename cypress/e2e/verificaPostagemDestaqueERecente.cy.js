describe("Teste de envio de duas postagens para a página inicial", () => {
  it("Deve permitir o envio de duas postagens e verificar se a primeira foi movida para a seção de artigos recentes", () => {
    cy.visit("https://matthzin.github.io/ProjetoBlog/index.html");

    cy.get("#publicar").click();
    cy.get("#titulo").type("Título de Teste");
    cy.get("#conteudo").type("Conteúdo de teste para a postagem");
    cy.get('input[type="submit"]').click();
    cy.get("#artigo-destaque")
      .should("contain", "Título de Teste")
      .and("contain", "Conteúdo de teste para a postagem");

    cy.get("#publicar").click();
    cy.get("#titulo").type("Segunda Postagem");
    cy.get("#conteudo").type("Conteúdo da segunda postagem");
    cy.get('input[type="submit"]').click();
    cy.get("#artigo-destaque")
      .should("contain", "Segunda Postagem")
      .and("contain", "Conteúdo da segunda postagem");

    cy.get("#artigo-recente")
      .should("contain", "Título de Teste")
      .and("contain", "Conteúdo de teste para a postagem");
  });
});
