describe("Validação de campos obrigatórios para postagem", () => {
  it("Não deve permitir enviar uma postagem sem preencher o título", () => {
    cy.visit("https://matthzin.github.io/ProjetoBlog/index.html");

    cy.get("#publicar").click();
    cy.get("#conteudo").type("Conteúdo de teste sem título");
    cy.get('input[type="submit"]').click();

    cy.get('input[type="submit"]').should("be.visible");
  });

  it("Não deve permitir enviar uma postagem sem preencher o conteúdo", () => {
    cy.visit("https://matthzin.github.io/ProjetoBlog/index.html");

    cy.get("#publicar").click();
    cy.get("#titulo").type("Título de teste sem conteúdo");
    cy.get('input[type="submit"]').click();

    cy.get('input[type="submit"]').should("be.visible");
  });
});
