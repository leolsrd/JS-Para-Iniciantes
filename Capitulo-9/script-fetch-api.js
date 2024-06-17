fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resposta) => resposta.json())
  .then((postagens) => console.log(postagens))
  .catch((erro) => console.log(`Erro: ${erro}`));

const novaPostagem = {
  title: "Minha nova postagem",
  body: "Este é o corpo da minha nova postagem",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(novaPostagem),
})
  .then((resposta) => resposta.json())
  .then((postagem) => console.log(postagem))
  .catch((erro) => console.log(`Erro: ${erro}`));
