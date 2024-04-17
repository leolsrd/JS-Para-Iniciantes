let idade = 16;

if (idade >= 18) {
  console.log("Você pode votar");
} else if (idade == 17) {
  console.log("Você pode votar no próximo ano");
} else {
  console.log("Você ainda não pode votar por ter: " + idade + " anos");
}

let dia = 7;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira, falta pouco");
    break;
  case 6:
    console.log("Sábado, já sinto o cheiro do descanso");
    break;
  default:
    console.log("Finalmente domingo, descansar e estudar");
    break;
}
