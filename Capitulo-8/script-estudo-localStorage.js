localStorage.setItem("nome", "João");
let nome = localStorage.getItem("nome");
console.log(nome);

let pessoa = {
  nome: "João",
  idade: 30,
  cidade: "Rio de Janeiro",
};

localStorage.setItem("pessoa", JSON.stringify(pessoa));
let pessoaRecuperada = JSON.parse(localStorage.getItem("pessoa"));
console.log(pessoaRecuperada);
