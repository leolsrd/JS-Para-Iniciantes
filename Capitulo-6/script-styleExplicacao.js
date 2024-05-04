let meuElementoClass = document.getElementsByClassName("meuElemento");
let meuElementoId = document.getElementById("meuElemento");

// meuElementoClass[0].style.color = "red";

// meuElementoId.style.color = "blue";
meuElementoId.style.fontSize = "2.25em";
meuElementoId.style.background = "#f0f0f0";
//* Adicionando uma classe de nome vermelho ao meu elemento
meuElementoId.classList.add("vermelho");
//* Removendo uma classe de nome vermelho do meu elemento
meuElementoId.classList.remove("vermelho");
//* O toggle se não tiver a classe vermelho ele adiciona e se tiver ele remove
meuElementoId.classList.toggle("vermelho");

// Lendo o estilo CSS que tem no elemento
let estiloCapturado = window.getComputedStyle(meuElementoId);

//* Vendo todo o estilo que tem na página
// console.log(estiloCapturado);

//* Vendo a cor capturada na página
console.log(estiloCapturado.color);

// console.log(meuElementoClass[0]);
