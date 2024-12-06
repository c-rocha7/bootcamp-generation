const leia = require('readline-sync');

let pares = 0,
  impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = leia.questionInt(`Digite o ${i}° numero: `);

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`\nTotal de números pares: ${pares}
            \nTotal de números ímpares: ${impares}`);
