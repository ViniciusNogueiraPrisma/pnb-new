// var botaoTema = document.getElementById("contrastTogglea");
// var temaAtual = "normal"; // Começa com o tema padrão

// botaoTema.addEventListener("click", function () {
//   if (temaAtual === "normal") {
//     alterarTema("dark");
//     temaAtual = "dark";
//   } else {
//     alterarTema("normal");
//     temaAtual = "normal";
//   }
// });

// function alterarTema(tema) {
//   var elementos = document.querySelectorAll(".themas"); // Substitua '.elemento-alterar' pela classe dos elementos que deseja alterar

//   for (var i = 0; i < elementos.length; i++) {
//     if (tema === "dark") {
//       elementos[i].style.backgroundColor = "black";
//       elementos[i].style.color = "white";
//     } else if (tema === "normal") {
//       elementos[i].style.backgroundColor = ""; // Reverte para o estilo padrão
//       elementos[i].style.color = ""; // Reverte para o estilo padrão
//     }
//   }
// }

var botaoTema = document.getElementById("contrastTogglea");
var temaAtual = "normal"; // Começa com o tema padrão

botaoTema.addEventListener("click", function () {
  if (temaAtual === "normal") {
    alterarTema("dark");
    temaAtual = "dark";
  } else {
    alterarTema("normal");
    temaAtual = "normal";
  }
});

function alterarTema(tema) {
  var elementos = document.querySelectorAll(".themas"); // Substitua '.themas' pela classe dos elementos que deseja alterar

  for (var i = 0; i < elementos.length; i++) {
    if (tema === "dark") {
      elementos[i].style.backgroundColor = "black";
      elementos[i].style.color = "white";

      // Aplicar efeito negativo nas imagens
      var imagens = elementos[i].querySelectorAll("img");
      for (var j = 0; j < imagens.length; j++) {
        imagens[j].style.filter = "invert(100%)"; // Inverte as cores da imagem
      }
    } else if (tema === "normal") {
      elementos[i].style.backgroundColor = ""; // Reverte para o estilo padrão
      elementos[i].style.color = ""; // Reverte para o estilo padrão

      // Remover o efeito negativo das imagens
      var imagens = elementos[i].querySelectorAll("img");
      for (var j = 0; j < imagens.length; j++) {
        imagens[j].style.filter = "none"; // Remove o efeito de inversão de cores
      }
    }
  }
}

function aumentarFonte() {
  var elementosDeTexto = document.querySelectorAll(".aumentarFontClass"); // Substitua '.classe-de-texto' pela sua classe específica

  elementosDeTexto.forEach(function (elemento) {
    var estiloAtual = getComputedStyle(elemento);
    var tamanhoFonteAtual = parseFloat(estiloAtual.fontSize);
    var novoTamanhoFonte = tamanhoFonteAtual * 1.05; // Aumenta em 5%

    elemento.style.fontSize = novoTamanhoFonte + "px";
  });
}

var botaoAumentarFonte = document.getElementById("AumentarFont");
botaoAumentarFonte.addEventListener("click", aumentarFonte);

////////////////////////

function diminuirFonte(classe) {
  var elementosDeTexto = document.querySelectorAll("." + classe);

  elementosDeTexto.forEach(function (elemento) {
    var estiloAtual = getComputedStyle(elemento);
    var tamanhoFonteAtual = parseFloat(estiloAtual.fontSize);
    var novoTamanhoFonte = tamanhoFonteAtual * 0.95; // Diminui em 5%

    elemento.style.fontSize = novoTamanhoFonte + "px";
  });
}

var botaoDiminuirFonte = document.getElementById("DiminuirFonte");
botaoDiminuirFonte.addEventListener("click", function () {
  diminuirFonte("DiminuirFonteClass"); // Substitua 'classe-de-texto' pela sua classe específica
});
