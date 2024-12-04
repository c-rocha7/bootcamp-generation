const leia = require('readline-sync');

console.log('| Código | Operação |');
console.log('|--------|----------|');
console.log('| 1 | Soma |');
console.log('| 2 | Subtração |');
console.log('| 3 | Multiplicação |');
console.log('| 4 | Divisão |');

let numero1 = leia.questionFloat('Digite o 1° número: ');
let numero2 = leia.questionFloat('Digite o 2° número: ');
let operacao = leia.questionInt('Operação: ');

switch (operacao) {
  case 1:
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case 2:
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
  case 3:
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;
  case 4:
    console.log(`${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(2)}`);
    break;
  default:
    console.log('Operação Inválida!');
}
