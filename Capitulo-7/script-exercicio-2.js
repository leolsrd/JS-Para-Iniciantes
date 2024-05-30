/**
 * Validação de e-mail: Adicione um campo de e-mail ao formulário.
 * Quando o formulário for submetido, verifique se o campo de e-mail contém
 * um "@" e um ".". Se não contiver, exiba um alerta ao usuário.
 */

let form = document.querySelector(".myForm");
let inputEmail = document.querySelector(".inputEmail");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //* Vem o domínio com o .com
  let dominioCompleto = inputEmail.value.substring(
    inputEmail.value.indexOf("@") + 1,
    inputEmail.value.length
  );

  //* Removendo o .com ou .com.br
  let dominio = dominioCompleto.substring(
    dominioCompleto.indexOf("."),
    dominioCompleto.indexOf("@")
  );

  let validRegex = /^\s+|\s+$/gm;

  if (!inputEmail.value) {
    alert("E-mail não inserido");
  } else if (validRegex.test(inputEmail.value)) {
    console.log(inputEmail.value);
    alert("Verifique os espaços no e-mail");
  } else if (dominio.length <= 2) {
    alert("E-mail inserido de forma incorreta");
  } else if (
    !inputEmail.value.includes("@") ||
    !inputEmail.value.includes(".")
  ) {
    alert("E-mail fora do padrão");
  }
});
