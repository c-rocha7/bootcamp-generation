const leia = require('readline-sync');

const numeros: Set<number> = new Set<number>();
let contador: number = 0;

while (contador < 10) {
  numeros.add(leia.questionInt('Digite um numero: '));
  contador++;
}

console.log('Lista de números do Set: ');

for (let numero of numeros) {
  console.log(numero);
}
