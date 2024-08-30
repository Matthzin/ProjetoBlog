document.addEventListener("DOMContentLoaded", function () {
  const postagens = JSON.parse(localStorage.getItem("postagens")) || [];
  console.log(postagens);
  console.log("aqui");

  const artigoDestaque = document.getElementById("artigo-destaque");
  const artigoRecente = document.getElementById("artigo-recente");

  if (postagens.length > 0) {
    const postagem = postagens[0];
    const postagemDiv = document.createElement("div");
    postagemDiv.className = "post-destaque"
    postagemDiv.classList.add("postagem");
    
    const titulo = document.createElement("h3");
    const breakline = document.createElement("br");
    titulo.textContent = postagem.titulo;
    postagemDiv.appendChild(titulo);
    postagemDiv.appendChild(breakline);
    
    const conteudo = document.createElement("p");
    const breakline2 = document.createElement("br");
    conteudo.textContent = postagem.conteudo;
    postagemDiv.appendChild(conteudo);
    postagemDiv.appendChild(breakline2);

    
    const data = document.createElement("p");
    data.classList.add("data");
    data.textContent = `Publicado em: ${postagem.data}`;
    postagemDiv.appendChild(data);

    artigoDestaque.appendChild(postagemDiv);

    for (let i = 1; i < postagens.length; i++) {
      const postagemRecent = postagens[i];

      const postagemRecentDiv = document.createElement("div");
      postagemRecentDiv.classList.add("postagem-recente");

      const tituloRecent = document.createElement("h3");
      tituloRecent.textContent = postagemRecent.titulo;
      postagemRecentDiv.appendChild(tituloRecent);

      const conteudoRecent = document.createElement("p");
      conteudoRecent.textContent = postagemRecent.conteudo;
      postagemRecentDiv.appendChild(conteudoRecent);

      const dataRecent = document.createElement("p");
      const linha = document.createElement("hr");
      linha.classList.add("linha");
      dataRecent.classList.add("data");
      dataRecent.textContent = `Publicado em: ${postagemRecent.data}`;
      postagemRecentDiv.appendChild(dataRecent);
      postagemRecentDiv.appendChild(linha); 

      artigoRecente.appendChild(postagemRecentDiv);
    }
  } else {
    const mensagem = document.createElement("p");
    mensagem.textContent = "Não há postagens para exibir.";
    artigoDestaque.appendChild(mensagem);
  }
});



