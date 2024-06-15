let promise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    resolve("Operação concluída com sucesso");
  } else {
    reject("Operação falhou!");
  }
});

promise
  .then((message) => console.log(message))
  .catch((errorMessage) => console.log(errorMessage));
