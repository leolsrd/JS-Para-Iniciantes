let button = document.getElementById("myButton");
let mouseOver = document.getElementById("myParagraph");
let input = document.getElementById("myInput");
let form = document.getElementById("myForm");

mouseOver.addEventListener("mouseover", function () {
  console.log("o mouse está sobre o parágrafo");
});

button.addEventListener("click", function () {
  console.log("O botão foi clicado");
});

input.addEventListener("change", function () {
  console.log("O valor do input foi alterado:  " + this.value);
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede que a página seja recarregada
});

window.addEventListener("keydown", function (event) {
  console.log("Você pressionou a tecla: " + event.key);
});
