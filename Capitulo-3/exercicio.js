console.log("Execício capítulo 3");
// Conversão de Tipos de Dados:  Crie duas variáveis, uma com um número e
// outra com uma string.Tente somá - las e veja o resultado.Depois, converta
// a string em um número e tente a soma novamente.

console.log("\nConversão do tipo de dados");
console.log("Valor 1 = 10 em número inteiro");
console.log("Valor 2 = 10 em string");
let numero = 10;
let stringNumero = "10";
let soma = numero + stringNumero;
console.log("Primeira soma: " + soma);
// Realizando o cast de string para número
soma = numero + Number(stringNumero);
console.log(
  "Segunra soma após ter feito o cast de string para number: " + soma
);

/**
 * Uso de Operadores: Declare três variáveis: a, b e c. Defina valores para
 * a e b. Use operadores para fazer c ser igual a a mais b, depois a menos b,
 * depois a multiplicado por b, e finalmente a dividido por b. Imprima os
 * resultados no console.
 */

console.log("\nOperadores (Adição, Subtração, Multiplicação e Divisão)");

let a = 10;
let b = 5;
let c;
console.log("Valor de A = " + a);
console.log("Valor de B = " + b);
c = a + b;
console.log("A + B = C => " + c);
c = a - b;
console.log("A - B = C => " + c);
c = a * b;
console.log("A * B = C => " + c);
c = a / b;
console.log("A / B = C => " + c);

/**
 * Estrutura de Controle Condicional: Escreva um programa que aceite a idade
 * de uma pessoa e imprima uma mensagem se a pessoa for maior de 18 anos
 * dizendo "Você é maior de idade" e, se não for, "Você é menor de idade".
 */

console.log("\nCondicional maior de idade");
let idade = 41;

if (idade >= 18) {
  console.log("Você é maior de idade: " + idade);
} else {
  console.log("Você é menor de idade: " + idade);
}

/**
 * Estrutura de Controle Loop (for): Crie um loop for que imprima os números
 * de 1 a 10 no console.
 */

console.log("\nLaço For de 1 a 10");
let liHTML = document.querySelector(".lista-nomes ul");

for (let i = 1; i <= 10; i++) {
  liHTML.innerHTML += `<li>Laço For:  ${+i}</li>`;
}

/**
 * Estrutura de Controle Loop (while):  Crie um loop while que imprima os
 *  números de 10 a 1 no console, em ordem decrescente.
 */

console.log("\nLaço While de 1 a 10");
let n = 10;
while (n >= 1) {
  console.log("Laço While: " + n);
  n--;
}
