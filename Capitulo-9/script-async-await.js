// function primeiraFuncao() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Esperou isso aqui");
//       resolve();
//     }, 2000);
//   });
// }

// async function segundaFuncao() {
//   console.log("Iniciou");

//   await primeiraFuncao();

//   console.log("Terminou");
// }

// segundaFuncao();

// * Prático
function getProducts(id) {
  return fetch(`https://reqres.in/api/products/${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showProductsName(id) {
  try {
    const products = await getProducts(id);

    console.log(`O nome do produto é: ${products.data.name}`);
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

showProductsName(3);
