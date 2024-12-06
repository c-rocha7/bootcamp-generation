const leia = require('readline-sync');

let vetor = new Array(10);
let soma = 0,
  media = 0,
  vetorImpares = [],
  vetorPares = [];

for (let index = 0; index < vetor.length; index++) {
  vetor[index] = leia.questionInt('Digite um numero: ');
}

for (let index = 0; index < vetor.length; index++) {
  if (vetor[index] % 2 != 0) {
    vetorImpares.push(vetor[index]);
  } else {
    vetorPares.push(vetor[index]);
  }

  soma += vetor[index];

  media = soma / vetor.length;
}

console.log(`\nElementos nos índices ímpares: ${vetorImpares}
			\nElementos nos índices pares: ${vetorPares}
			\nSoma: ${soma}
			\nMédia: ${media.toFixed(2)}`);
