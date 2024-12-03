const leia = require('readline-sync');

let salario = leia.questionFloat('Digite o salario: ');

let abono = leia.questionInt('Digite o abono: ');

console.log(`Novo salário: ${salario + abono}`);
