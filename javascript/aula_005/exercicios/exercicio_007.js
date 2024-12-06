const leia = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt('Digite o numero que voce deseja encontrar: ');

for (let index = 0; index < vetor.length; index++) {
  if (numero == vetor[index]) {
    console.log(`\nO número ${numero} está localizado na posição: ${index}`);
    break;
  } else {
    console.log(`\nO número ${numero} não foi encontrado!`);
    break;
  }
}
