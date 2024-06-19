// Crie uma função que retorne uma Promise que se resolve após 2 segundos
// com a string "Tempo esgotado!".Use o método setTimeout para simular o
// atraso.

let myPromise = (time) => {
  return new Promise((resolve, reject) => {
    if (time) {
      setTimeout(resolve, time);
    } else {
      reject("Erro");
    }
  });
};

myPromise(2000)
  .then(function () {
    console.log("Tempo esgotado!");
  })
  .catch((errorMessage) => console.log(errorMessage));
