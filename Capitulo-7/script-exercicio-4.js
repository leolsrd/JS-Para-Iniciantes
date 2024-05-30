/**
 * Verificação de acordo:  Adicione uma caixa de seleção ao formulário que
 * diga "Eu concordo com os termos e condições". Use JavaScript para
 * verificar se a caixa de seleção foi marcada quando o formulário for
 * submetido. Se não foi, exiba um alerta ao usuário.
 */

let form = document.querySelector(".myForm");
let termos = document.querySelector("#termos");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(termos.checked);

  if (!termos.checked) {
    alert("Clique em eu concordo com os termos e condições");
  } else {
    console.log("Termos aceito");
  }
});
