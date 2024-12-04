const leia = require('readline-sync');

console.log('| Código da Operação | Operação |');
console.log('|--------------------|----------|');
console.log('| 1 | Saldo |');
console.log('| 2 | Saque |');
console.log('| 3 | Depósito |');

let saldo = 1000;
let operacao = leia.questionInt('Operação: ');

switch (operacao) {
  case 1:
    console.log('Operação - Saldo');
    console.log(
      `Saldo: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(saldo)}`
    );
    break;
  case 2:
    console.log('Operação - Saque');
    let valorSaque = leia.questionFloat('Valor a ser sacado: ');
    if (valorSaque > saldo) {
      console.log('Saldo Insuficiente!');
    } else {
      console.log(
        `Saldo: ${new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(saldo - valorSaque)}`
      );
    }
    break;
  case 3:
    console.log('Operação - Saque');
    let valorDeposito = leia.questionFloat('Valor a ser depositado: ');
    console.log(
      `Saldo: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(saldo + valorDeposito)}`
    );
    break;
  default:
    console.log('Operação Inválida!');
}
