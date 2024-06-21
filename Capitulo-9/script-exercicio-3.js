// Escreva uma função assíncrona que faz uma requisição GET para
// 'https://jsonplaceholder.typicode.com/posts', converte a resposta para
// JSON e retorna o título do primeiro post.

// * Meu código:
async function showPostId(id) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data_1 = await data.json();
    return console.log(data_1.title);
  } catch (err) {
    return console.log(err);
  }
}

showPostId(1);

// ! Código do livro

// async function getPrimeiroTitulo() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const data = await response.json();

//   return data[0].title;
// }

// getPrimeiroTitulo().then(console.log);
