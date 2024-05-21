let campoNome = document.getElementById("nome");

// ? Lê o valor atual do campo
let nomeAtual = campoNome.value;

// ? Define um novo valor para o campo
campoNome.value = "Novo Nome";

let campoCheckbox = document.getElementById("meuCheckbox");

// ? Verifica se a caxia de seleção está marcada
let isChecked = campoCheckbox.checked;

// ? Marca a caixa de seleção
campoCheckbox.checked = true;

// ? Desmarca a caixa de seleção
campoCheckbox.checked = false;

let campoSelect = document.getElementById("meuSelect");
campoSelect.addEventListener("change", meuSelect);

// ? Obtém o valor da opção selecionada
let valorSelecionado = campoSelect.value;

// ? Obtém o índice da opção selecionada
let indiceSelecionado = campoSelect.selectedIndex;
// console.log(indiceSelecionado);

// ? Define a opção selecionada por índice
campoSelect.selectedIndex = 2;

// * Estudo extra
function meuSelect() {
  console.log(`Valor selecionado: ${campoSelect.value}`);
  console.log(`Indice selecionado: ${campoSelect.selectedIndex}`);
}
