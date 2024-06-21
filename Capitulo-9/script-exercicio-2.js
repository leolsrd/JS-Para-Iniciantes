// Use a Fetch API para fazer uma requisição GET para
// 'https://jsonplaceholder.typicode.com/users' e imprima a resposta
// no console.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resposta) => resposta.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
