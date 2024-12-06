const leia = require('readline-sync');

let matriz = new Array(3),
  diagonalPrincipal = [],
  somaDiagonalPrincipal = 0,
  diagonalSecundaria = [],
  somaDiagonalSecundaria = 0;

for (let index = 0; index < matriz.length; index++) {
  matriz[index] = Array(3);
}

for (let indexLinha = 0; indexLinha < matriz.length; indexLinha++) {
  for (let indexColuna = 0; indexColuna < matriz.length; indexColuna++) {
    matriz[indexLinha][indexColuna] = leia.questionInt('Digite um numero: ');
  }
}

for (let index = 0; index < matriz.length; index++) {
  diagonalPrincipal.push(matriz[index][index]);
  somaDiagonalPrincipal += matriz[index][index];
}

for (let index = 0; index < matriz.length; index++) {
  diagonalSecundaria.push(matriz[index][matriz.length - 1 - index]);
  somaDiagonalSecundaria += matriz[index][matriz.length - 1 - index];
}

console.log(`\nElementos da Diagonal Principal: ${diagonalPrincipal}
			\nElementos da Diagonal Segundária: ${diagonalSecundaria}
			\nSoma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}
			\nSoma dos Elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`);
