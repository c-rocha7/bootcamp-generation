const leia = require('readline-sync');

let salarioBruto = leia.questionFloat('Digite o salario bruto: ');

let adicionalNoturno = leia.questionFloat('Digite o adicional noturno: ');

let horasExtras = leia.questionFloat('Digite as horas extras: ');

let descontos = leia.questionFloat('Digite os descontos: ');

console.log(
  `Salário líquido: ${(
    salarioBruto +
    adicionalNoturno +
    horasExtras * 5 -
    descontos
  ).toFixed(2)}`
);
