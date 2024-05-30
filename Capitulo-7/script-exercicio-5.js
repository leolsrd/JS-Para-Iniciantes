/**
 * Formulário de Feedback: Crie um formulário de feedback com campos para
 * nomeAValidar, e-mail, e uma área de texto para o feedback. Quando o formulário
 * for submetido, use JavaScript para validar os campos e, se todos os
 * campos passarem na validação, exiba uma mensagem de agradecimento ao
 * usuário.
 */

let form = document.querySelector(".myForm");
let nome = document.querySelector(".nome");
let email = document.querySelector(".email");
let feedback = document.querySelector(".feedback");

// * Regex de validações
let validRegexEspaco = /^\s+|\s+$/gm;
let validRegexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

function validarEmail(emailAValidar) {
  //* Remove o @ e retorna o domínio com o .com ou .com.br
  let dominioCompleto = emailAValidar.substring(
    emailAValidar.indexOf("@") + 1,
    emailAValidar.length
  );

  if (!emailAValidar) {
    alert("E-mail não informado");
  } else if (validRegexEspaco.test(emailAValidar)) {
    alert("Verifique os espaços no e-mail");
  } else if (dominioCompleto.length <= 2) {
    alert("E-mail inserido de forma incorreta");
  } else if (!emailAValidar.includes("@") || !dominioCompleto.includes(".")) {
    alert("E-mail fora do padrão");
  } else {
    return emailAValidar;
  }
}

function validarNome(nomeAValidar) {
  if (!nomeAValidar) {
    alert("Nome não informado");
  } else if (!validRegexNome.test(nomeAValidar)) {
    alert("Nome não pode ter caracteres especiais");
  } else if (validRegexEspaco.test(nomeAValidar)) {
    alert("Verifique os espaços no nome");
  } else {
    return nomeAValidar;
  }
}

function validarFeedback(feedbackAValidar) {
  if (!feedbackAValidar) {
    alert("Feedback não informado");
  } else if (!validRegexNome.test(feedbackAValidar)) {
    alert("Feedback não pode ter caracteres especiais");
  } else if (validRegexEspaco.test(feedbackAValidar)) {
    alert("Verifique os espaços no feedback");
  } else if (feedbackAValidar == "Feedback") {
    alert("Não pode ser enviado apenas o nome Feedback");
  } else if (feedbackAValidar.length <= 10) {
    alert("O Feedback tem que ter no mínimo 10 caracteres");
  } else {
    return feedbackAValidar;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let emailValidado = validarEmail(email.value);
  let nomeValidado = validarNome(nome.value);
  let feedbackValidado = validarFeedback(feedback.value);

  if (emailValidado && nomeValidado && feedbackValidado) {
    alert(
      "Agradecemos seu feedback e logo entraremos em contato se necessário for."
    );
  }
});
