/**
 * Validação de senha: Adicione um campo de senha ao formulário.
 *  Quando o formulário for submetido, verifique se a senha tem pelo menos 8
 *  caracteres e contém pelo menos uma letra e um número. Se não, exiba um
 *  alerta ao usuário.
 */

let form = document.querySelector(".myForm");
let inputSenha = document.querySelector(".inputSenha");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!validRegex.test(inputSenha.value)) {
    alert(
      "A senha tem que ter no mínimo 8 caracteres incluindo letras e números"
    );
  }
});
