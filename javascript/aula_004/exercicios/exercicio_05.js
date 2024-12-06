const leia = require('readline-sync');

let numero = 0,
  soma = 0;

do {
  numero = leia.questionInt('Digite um numero: ');
  if (numero === 0) {
    break;
  }

  if (numero > 0) {
    soma += numero;
  }
} while (numero != 0);

console.log(`\nA soma dos números positivos é: ${soma}`);
