console.log("Exercícios do capítulo 4:");

// Função Básica:  Escreva uma função chamada 'saudacao' que aceita um
// argumento chamado 'nome'.A função deve retornar a string "Olá, [nome]!".
function saudacao(nome) {
  return "1 - Olá, " + nome + "!";
}
console.log(saudacao("Léo"));

// Funções com múltiplos parâmetros:  Crie uma função chamada 'soma' que
// aceita dois argumentos, 'num1' e 'num2'.A função deve retornar a soma
// desses dois números.
function soma(num1, num2) {
  return num1 + num2;
}
console.log("2 - Resultado da soma " + soma(2, 2));

// Função com estrutura condicional: Crie uma função chamada 'parOuImpar'
// que aceita um número como argumento. A função deve retornar "par" se o
// número for par e "ímpar" se o número for ímpar.
function parOuImpar(number) {
  if (number % 2 === 0) {
    return "3 - O número é par: " + number;
  } else {
    return "3 - O número é ímpar " + number;
  }
}
console.log(parOuImpar(4));

// Função com laço de repetição: Escreva uma função chamada
// 'contagemRegressiva' que aceita um número como argumento. A função deve
// imprimir no console a contagem regressiva a partir desse número até 0.
function contagemRegressiva(numero) {
  if (numero > 0) {
    let aux = numero;
    for (let i = 0; i <= aux; i++) {
      console.log("4 - Contagem Regressiva " + numero--);
    }
  } else if (numero < 0) {
    let aux = numero;
    for (let i = 0; i >= aux; i--) {
      console.log("4 - Contagem Regressiva " + numero++);
    }
  } else if (numero === 0) {
    console.log(
      "4 - Você inseriu o número 0 e não tem com fazer uma contagem regressiva"
    );
  } else {
    console.log("4 - Valor inserido é inválido");
  }
}
contagemRegressiva(-10);

// Funções e escopo de variáveis: Crie uma função chamada 'testeEscopo' que
// define uma variável local dentro da função e tente acessar essa variável
// fora da função.O que acontece ?
function testeEscopo() {
  let varLocal = 10;
}
console.log(varLocal);
