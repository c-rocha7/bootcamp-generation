const leia = require('readline-sync');

let salarioBruto = leia.questionFloat('Digite o salario bruto: ');

let adicionalNoturno = leia.questionFloat('Digite o adicional noturno: ');

let horasExtras = leia.questionFloat('Digite as horas extras: ');

let descontos = leia.questionFloat('Digite os descontos: ');

console.log(
  `Salário líquido: ${new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(salarioBruto + adicionalNoturno + horasExtras * 5 - descontos)}`
);
