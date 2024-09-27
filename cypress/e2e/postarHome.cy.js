describe("Teste de envio de postagem para a página inicial", () => {
  it("Deve permitir o envio de uma nova postagem", () => {
    cy.visit("https://matthzin.github.io/ProjetoBlog/index.html");

    cy.get('#publicar').click();
    cy.get('#titulo').type("Título de Teste");
    cy.get('#conteudo').type("Conteúdo de teste para a postagem");
    cy.get('input[type="submit"]').click();
    cy.get("#artigo-destaque")
      .should("contain", "Título de Teste")
      .and("contain", "Conteúdo de teste para a postagem");
  });
});
