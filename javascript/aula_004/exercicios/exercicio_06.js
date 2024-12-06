const leia = require('readline-sync');

let numero = 0,
  soma = 0,
  contador = 0;

do {
  numero = leia.questionInt('Digite um numero: ');
  if (numero === 0) {
    break;
  }

  if (numero % 3 === 0) {
    soma += numero;
    contador++;
  }
} while (numero != 0);

if (contador > 0) {
  let media = soma / contador;
  console.log(
    `A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`
  );
} else {
  console.log('Nenhum múltiplo de 3 foi digitado.');
}
