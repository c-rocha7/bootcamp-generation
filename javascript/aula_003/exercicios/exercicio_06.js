const leia = require('readline-sync');

console.log('| Código do Cargo | Cargo | Percentual do Reajuste |');
console.log('|-----------------|-------|------------------------|');
console.log('| 1 | Gerente | 10% |');
console.log('| 2 | Vendedor | 7% |');
console.log('| 3 | Supervisor | 9% |');
console.log('| 4 | Motorista | 6% |');
console.log('| 5 | Estoquista | 5% |');
console.log('| 6 | Técnico de TI | 8% |');

let nome = leia.question('Nome do colaborador: ');
let cargo = leia.questionInt('Cargo: ');
let salario = leia.questionFloat('Salario: ');

switch (cargo) {
  case 1:
    console.log(`Nome do colaborador: ${nome}`);
    console.log('Cargo: Gerente');
    console.log(
      `Salário: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(salario + 0.1 * salario)}`
    );
    break;
  case 2:
    console.log(`Nome do colaborador: ${nome}`);
    console.log('Cargo: Vendedor');
    console.log(
      `Salário: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(salario + 0.07 * salario)}`
    );
    break;
  case 3:
    console.log(`Nome do colaborador: ${nome}`);
    console.log('Cargo: Supervisor');
    console.log(
      `Salário: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(salario + 0.09 * salario)}`
    );
    break;
  case 4:
    console.log(`Nome do colaborador: ${nome}`);
    console.log('Cargo: Motorista');
    console.log(
      `Salário: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(salario + 0.06 * salario)}`
    );
    break;
  case 5:
    console.log(`Nome do colaborador: ${nome}`);
    console.log('Cargo: Estoquista');
    console.log(
      `Salário: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(salario + 0.05 * salario)}`
    );
    break;
  case 6:
    console.log(`Nome do colaborador: ${nome}`);
    console.log('Cargo: Técnico de TI');
    console.log(
      `Salário: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(salario + 0.08 * salario)}`
    );
    break;
  default:
    console.log('Cargo escolhido não existe!');
}
