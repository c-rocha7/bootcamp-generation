import leia = require('readline-sync');

// const numerosSet: Set<number> = new Set<number>([
//   2, 5, 1, 3, 4, 9, 7, 8, 10, 6,
// ]);

const numerosSet: Set<number> = new Set<number>();
let contador: number = 0;

while (contador < 10) {
  numerosSet.add(leia.questionInt('Digite um numero: '));
  contador++;
}

let numero = leia.questionInt('\nDigite o numero que voce deseja encontrar: ');

if (numerosSet.has(numero)) {
  console.log(`\nO número ${numero} foi encontrado!`);
} else {
  console.log(`\nO número ${numero} não foi encontrado!`);
}
