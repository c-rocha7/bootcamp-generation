const leia = require('readline-sync');

let vetorStrings = [
  'Boxer',
  'Pastor Alemão',
  'Pinscher',
  'Husky Siberiano',
  'Corgi',
];

let vetorInteiros = new Array(5);

let vetorNumeros = [7, 5, 9, 1, 3, 2, 6, 4, 8, 10];

// console.log(vetorStrings[0]);

// for (let contador = 0; contador < vetorStrings.length; contador++) {
//   console.log(vetorStrings[contador]);
// }

// console.log(`O tamanho do Vetor de Strings é: ${vetorStrings.length}`);

// for (let contador = 0; contador < vetorInteiros.length; contador++) {
//   vetorInteiros[contador] = leia.questionInt('Digite um numero: ');
// }

// console.table(vetorInteiros);

console.table(vetorStrings.sort());

console.table(vetorNumeros.sort());

console.table(vetorNumeros.sort((a, b) => a - b));
