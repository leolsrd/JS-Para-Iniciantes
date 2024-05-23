/* Verificação de entrada vazia:  Crie um formulário simples com um campo de entrada para o nome do usuário. Usando JavaScript, verifique se o campo não está vazio antes de permitir que o formulário seja submetido. Se o campo estiver vazio, exiba um alerta ao usuário.
 */

let inputNome = document.getElementById("nome");

document.getElementById("meuForm").addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputNome.value === "") {
    alert("Deve ser informado o nome antes do envio");
  } else {
    console.log(`O nome informado foi: ${inputNome.value}`);
  }
});
