const leia = require('readline-sync');

console.log('| Código do Produto | Produto | Preço Unitário |');
console.log('|-------------------|---------|----------------|');
console.log('| 1 | Cachorro Quente | R$ 10,00 |');
console.log('| 2 | X-Salada | R$ 15,00 |');
console.log('| 3 | X-Bacon | R$ 18,00 |');
console.log('| 4 | Bauru | R$ 12,00 |');
console.log('| 5 | Refrigerante | R$ 8,00 |');
console.log('| 6 | Suco de laranja | R$ 13,00 |');

let produto = leia.questionInt('Código do Produto: ');
let quantidade = leia.questionInt('Quantidade: ');

switch (produto) {
  case 1:
    console.log('Produto: Cachorro Quente');
    console.log(
      `Valor total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(10 * quantidade)}`
    );
    break;
  case 2:
    console.log('Produto: X-Salada');
    console.log(
      `Valor total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(15 * quantidade)}`
    );
    break;
  case 3:
    console.log('Produto: X-Bacon');
    console.log(
      `Valor total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(18 * quantidade)}`
    );
    break;
  case 4:
    console.log('Produto: Bauru');
    console.log(
      `Valor total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(12 * quantidade)}`
    );
    break;
  case 5:
    console.log('Produto: Refrigerante');
    console.log(
      `Valor total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(8 * quantidade)}`
    );
    break;
  case 6:
    console.log('Produto: Refrigerante');
    console.log(
      `Valor total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(13 * quantidade)}`
    );
    break;
  default:
    console.log('Não foi escolhido uma opção valida do cardápio.');
}
