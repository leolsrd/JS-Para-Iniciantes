// ? Exercício 1
// ? Crie um arquivo HTML com vários tipos de elementos, como p, div, h1, etc.
// ? No seu arquivo JavaScript, selecione cada um desses elementos usando
// ? tanto getElementById, getElementsByClassName, getElementsByTagName e
// ? querySelector.

let getH1 = document.getElementById("elementoH1");

let getP = document.getElementsByClassName("elementoP");

let getDiv = document.getElementsByTagName("div");

let getSpan = document.querySelector("span");

let getClassElemento = document.querySelectorAll(".elemento");

let getByName = document.getElementsByName("escondido");

// console.log(getH1);

// console.log(getP[0]);

// console.log(getDiv[0].innerHTML);

// console.log(getSpan.innerHTML);

// console.log(getClassElemento);

console.log(getByName[0].name);

// ? Exercício 2
// ? Manipulação de Conteúdo No mesmo arquivo HTML, altere o conteúdo de cada
// ? elemento selecionado no exercício anterior usando textContent e innerHTML.

getH1.innerHTML = "Este é meu H1 modificado pelo exercício 2";
getP[0].innerHTML = "Este é um parágrafo modificado pelo exerício 2";
getDiv[0].textContent = "Esta é uma div modificado pelo exercício 2";
getSpan.textContent = "Este é um Span modificado pelo exercício 2";

// ? Exercício 3
// ? Manipulação de Atributos Adicione um link a uma imagem e um link a outra
// ? página da web no seu arquivo HTML. No seu arquivo JavaScript, altere o
// ? destino(href) do link e a imagem(src) usando setAttribute.

let getHref = document.getElementsByTagName("a");
getHref[0].href = "https://br.pinterest.com/pin/291045194684648617/";

let getImg = document.getElementById("minhaImagem");
getImg.setAttribute("src", "./img/caramelo.jpeg");

// ? Exercício 4
// ? Manipulação de Estilos Adicione vários elementos ao seu arquivo HTML
// ? que poderiam se beneficiar de estilização, como um título, um parágrafo
// ? de texto e um bloco de conteúdo.No seu arquivo JavaScript, altere o
// ? estilo desses elementos usando style.
