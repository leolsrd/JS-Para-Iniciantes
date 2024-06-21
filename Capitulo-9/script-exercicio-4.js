// Use a Fetch API para fazer uma requisição POST para
// 'https://jsonplaceholder.typicode.com/posts'.Envie o seguinte objeto
// como dados: { title: 'Meu Post', body: 'Este é o corpo do meu post',
// userId: 1 }. Imprima a resposta no console.

const newPost = {
  title: "Meu Post",
  body: "Este é o corpo do meu post",
  userId: 1,
};

async function postNewPost(newPost) {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((resposta) => resposta.json())
      .then((postagem) => console.log(postagem))
      .catch((erroInterno) => console.log(`Erro 1: ${erroInterno}`));
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

postNewPost(newPost);

// * Deu certo
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(newPost),
// })
//   .then((resposta) => resposta.json())
//   .then((postagem) => console.log(postagem))
//   .catch((err) => console.log(`Erro: ${err}`));
