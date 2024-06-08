/**
 * Exercício 1
 * Trabalhando com JSON: Crie um objeto JavaScript com várias propriedades,
 * incluindo strings, números, booleanos, objetos e arrays. Converta este
 * objeto em uma string JSON e imprima no console. Em seguida, converta a
 * string JSON de volta em um objeto JavaScript e imprima no console.
 */

let objPessoa = {
  nome: "Léo Lourenço",
  idade: 40,
  estudante: true,
  pets: {
    dog1: "Sara",
    dog2: "Bob",
    dog3: "Axl",
  },
  hobies: ["Tocar violão", "Ler Livro", "Estudar", "Maratonar série"],
};

let convertObjJSForJSON = JSON.stringify(objPessoa);
console.log(`Imprimindo o JSON: \n${convertObjJSForJSON}`);

let convertJSONForObjJS = JSON.parse(convertObjJSForJSON);
console.log("Imprimindo Objeto JS: ");
console.log(convertJSONForObjJS);

/**
 * Exercício 2
 * Salvando Dados no Armazenamento Local:
 * Crie um formulário simples com um campo de entrada de texto e um botão.
 * Quando o botão for pressionado, salve o valor do campo de entrada no
 * armazenamento local.
 */

let form = document.querySelector(".myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.querySelector(".nome");

  // * Salvando em localStorage
  localStorage.setItem("nome", nome.value);
});

/**
 * Exercício 3
 * Recuperando Dados do Armazenamento Local:
 * Amplie o formulário do exercício anterior. Adicione outro botão que,
 * quando pressionado, recupera o valor do campo de entrada armazenado no
 * armazenamento local e o exibe em um alerta ou em algum elemento na página.
 */

let nomeDigitado = document.querySelector(".nomeDigitado");
let buttonRecuperarNome = document.querySelector(".recuperarNome");

buttonRecuperarNome.addEventListener("click", function (e) {
  e.preventDefault();

  // * Recuperando o nome salvo em localStorage
  let nomeLocalStorage = localStorage.getItem("nome");

  // * Inserindo os dados via JS no parágrafo no index
  nomeDigitado.style.color = "red";
  nomeDigitado.style.fontSize = "1.5rem";
  nomeDigitado.style.background = "#f1f1f1";
  nomeDigitado.style.padding = "5px 5px";
  nomeDigitado.style.display = "inline";
  nomeDigitado.innerHTML = `Nome salvo em Local Storage: ${nomeLocalStorage}`;

  if (!nomeLocalStorage) {
    alert("Não existe nome salvo");
    console.log(`Não existe nome salvo em local storage: ${nomeLocalStorage}`);
  } else {
    console.log(`Nome salvo em Local Storage: ${nomeLocalStorage}`);
    alert(`Nome salvo em local storage: ${nomeLocalStorage}`);
  }
});

/**
 * Exclusão de Dados do Armazenamento Local:
 * Adicione mais um botão ao formulário dos exercícios anteriores. Quando
 * este botão for pressionado, ele deve remover o valor do campo de entrada
 * do armazenamento local.
 */

let buttonApagarNome = document.querySelector(".apagarNome");

buttonApagarNome.addEventListener("click", function (e) {
  e.preventDefault();

  // * Pegando o nome em localStorage
  let nomeLocalStorage = localStorage.getItem("nome");

  if (!nomeLocalStorage) {
    alert("Não existe nome salvo");
  } else {
    console.log(`Apagando o nome em local storage: ${nomeLocalStorage}`);
    localStorage.removeItem("nome");
    alert("Nome apagado");
  }
});

/**
 * Armazenando Objetos no Armazenamento Local:
 * Crie um objeto JavaScript com algumas propriedades. Converta o objeto em
 * uma string JSON e armazene no armazenamento local. Recupere o objeto do
 * armazenamento local, converta-o de volta em um objeto JavaScript e
 * imprima no console.
 */

localStorage.setItem("objJson", convertObjJSForJSON);

let getObjLocalStorage = localStorage.getItem("objJson");
console.log(JSON.parse(getObjLocalStorage));
