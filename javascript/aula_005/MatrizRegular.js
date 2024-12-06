const leia = require('readline-sync');

let matrizInterios = new Array(3);

for (let index = 0; index < matrizInterios.length; index++) {
  matrizInterios[index] = Array(3);
}

for (let indexLinha = 0; indexLinha < matrizInterios.length; indexLinha++) {
  for (
    let indexColuna = 0;
    indexColuna < matrizInterios.length;
    indexColuna++
  ) {
    matrizInterios[indexLinha][indexColuna] =
      leia.questionInt('Digite um numero: ');
  }
}

console.table(matrizInterios);
