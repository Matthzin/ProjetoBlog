describe("Teste de envio de postagem com imagem", () => {
  it("Deve permitir o envio de uma nova postagem com imagem e verificar se a imagem aparece na página inicial", () => {
    cy.visit("https://matthzin.github.io/ProjetoBlog/index.html");

    cy.get("#publicar").click();
    cy.get("#titulo").type("Título de Teste com Imagem");
    cy.get("#conteudo").type("Conteúdo de teste com imagem");

    const imagePath = "images/javascript.png";
    cy.get("#imagem").attachFile(imagePath);

    cy.get('input[type="submit"]').click();

    cy.get("#artigo-destaque")
      .should("contain", "Título de Teste com Imagem")
      .and("contain", "Conteúdo de teste com imagem")

    cy.get(".post-destaque.postagem img.imagem-destaque")
      .should("have.attr", "src")
      .and("match", /data:image\/png;base64,/);
  });
});
