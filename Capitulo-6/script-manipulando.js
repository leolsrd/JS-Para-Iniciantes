let heading = document.getElementById("main-heading");
// console.log(heading);
// ? Altera o texto do elemento
heading.textContent = "Novo título";

let div = document.getElementById("main");
// ? Alterar o HTML interno
// * Aceita tag html ao inserir e renderiza no browser
div.innerHTML = "<p>Este é um novo parágrafo</p>";

let link = document.querySelector("a");
// ? Altrar atributos
// * Altera o atributo href do link
link.setAttribute("href", "https://www.novosite.com");

let div2 = document.getElementById("main");
// ? Alterar estilos css usa a classe style.propriedade
div2.style.color = "blue";
