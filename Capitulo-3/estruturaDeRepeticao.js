const nomes = ["Léo Lourenço", "Ana Clara", "Jussara", "Petrônio"];

// nomes.forEach((element) => {
//   console.log(element);
// });

for (nome in nomes) {
  console.log(nomes[nome]);
}

const idades = [15, 20, 28, 18, 19, 32, 41, 66, 57, 79, 11];
const result = idades.filter(maiorDeIdade);

function maiorDeIdade(idade) {
  return idade >= 18;
}

console.log(result);
