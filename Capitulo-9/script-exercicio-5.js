// Manipule uma função que retorna uma Promise.
// A função deve retornar uma Promise que se resolve após 3 segundos
// com o valor 10.
// Use then, catch e finally para manipular a Promise.
// Imprima o valor quando a Promise é resolvida, imprima um erro se a
// Promise for rejeitada e imprima "Promise manipulada" no final,
// independentemente do resultado.

let myPromisses = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

myPromisses
  .then((message) => console.log(message))
  .catch((errorMessage) => console.log(`Erro: ${errorMessage}`))
  .finally(() => console.log("Promisse Manipulada"));
