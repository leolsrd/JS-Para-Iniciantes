const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(function (n) {
  return n * n;
});

console.log(quadrados);

// Callback é uma função que é passada como argumento para outra função
// Acima a function dentro o map é um callback
// Vamos ver mais abaixo
function cumprimentar(callback) {
  console.log("Olá ");
  callback();
}

// Função de callback que está sendo passada abaixo dentro da função cumprimentar
function dizerNome() {
  console.log("João");
}

// Função de callback que está sendo passada abaixo dentro da função cumprimentar
cumprimentar(dizerNome);
