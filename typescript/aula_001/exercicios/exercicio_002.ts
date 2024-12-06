import leia = require('readline-sync');

// const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
const numeros: Array<number> = new Array<number>();

while (numeros.length < 10) {
  numeros.push(leia.questionInt('Digite um numero: '));
}

let numero = leia.questionInt('\nDigite o numero que voce deseja encontrar: ');

if (numeros.indexOf(numero) !== -1) {
  console.log(
    `\nO número ${numero} está localizado na posição: ${numeros.indexOf(numero)}`
  );
} else {
  console.log(`\nO número ${numero} não foi encontrado!`);
}
