document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("blogForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const conteudo = document.getElementById("conteudo").value.trim();
    const imagem = document.getElementById("imagem").files[0];

    if (titulo.length > 70) {
      alert("O título não pode ter mais que 70 caracteres.");
      return;
    }

    const conteudoPalavras = conteudo.split(/\s+/).length;
    const maxPalavras = 2500;
    if (conteudoPalavras > maxPalavras) {
      alert("O conteúdo não pode exceder 2.500 palavras.");
      return;
    }

    if (imagem && imagem.size > 5 * 1024 * 1024) {
      alert("A imagem não pode exceder 5MB.");
      return;
    }

    function converterImagemParaBase64(imagem, callback) {
      const reader = new FileReader();
      reader.onload = function (e) {
        callback(e.target.result);
      };
      reader.readAsDataURL(imagem);
    }

    if (titulo && conteudo) {
      if (imagem) {
        converterImagemParaBase64(imagem, function (imagemBase64) {
          salvarPostagem(titulo, conteudo, imagemBase64);
        });
      } else {
        salvarPostagem(titulo, conteudo, null);
      }
    }
  });

  function salvarPostagem(titulo, conteudo, imagemBase64) {
    const postagem = {
      titulo: titulo,
      conteudo: conteudo,
      data: new Date().toLocaleString(),
      imagem: imagemBase64,
    };

    let postagens = JSON.parse(localStorage.getItem("postagens")) || [];

    postagens.unshift(postagem);

    localStorage.setItem("postagens", JSON.stringify(postagens));

    alert("Publicação enviada com sucesso!");
    const redirect = "../index.html";
    window.location.href = redirect;
  }
});