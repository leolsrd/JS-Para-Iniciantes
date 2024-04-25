console.log("Exercícios do capítulo: 5");

// Manipulação de Objetos: Crie um objeto chamado estudante com propriedades
// nome, idade e curso.Em seguida, altere a propriedade idade para um outro
// valor.

let estudante = {
  nome: "Léo Lourenço",
  idade: 39,
  curso: "Desenvolvimento",
};
console.log("1º Exercício: Idade = " + estudante.idade);
estudante.idade = 41;
console.log("1º Exercício: Idade = " + estudante.idade);

// Adicionando propriedades a um Objeto: Usando o objeto estudante do
// exercício anterior, adicione uma nova propriedade semestre e atribua um
// valor a ela.
let estudante2 = estudante;
estudante2.semestre = "4º perído";
console.log("2º Exercício: Período = " + estudante2.semestre);

// Manipulação de Arrays: Crie um array chamado frutas e adicione três tipos
// de frutas a ele.Use o método push para adicionar uma quarta fruta, depois
// use o método shift para remover a primeira fruta do array.

let frutas = ["Banana", "Kiwi", "Mamão"];
console.log("3º Exercício: Frutas = " + frutas.join(" - "));
frutas.push("Seriguela");
console.log(
  "3º Exercício: Frutas adicionando nova fruta = " + frutas.join(" - ")
);
frutas.shift();
console.log(
  "3º Exercício: Frutas removendo a primeira fruta = " + frutas.join(" - ")
);

// Métodos de Arrays - join e slice: Usando o array frutas do exercício
// anterior, use o método join para criar uma string que contenha todas as
// frutas separadas por vírgulas.Em seguida, use o método slice para criar um
// novo array que contenha apenas a segunda e a terceira fruta.
let frutas2 = frutas;
console.log("4º Exercício: Frutas = " + frutas);
console.log("4º Exercício: Frutas com join = " + frutas.join(", "));
console.log(
  "4º Exercício: Frutas com slice segunda e terceira fruta = " +
    frutas.slice(1, 3).join(" - ")
);

// Métodos de Iteração - map: Crie um array chamado numeros com cinco números
// diferentes.Use o método map para criar um novo array onde cada número seja
// multiplicado por si mesmo.
let numeros = [1, 2, 3, 4, 5];
let quadrado = numeros.map(function (numero) {
  return numero * numero;
});
console.log("5º Exercício: Numeros = " + numeros);
console.log("5º Exercício: Numeros multiplicado por ele mesmo = " + quadrado);
