let numerosArrow: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Listar com o For
console.log('\nListar Números');
for (let numero of numerosArrow) {
  console.log(numero);
}

// Listar com o forEach e Arrow Functions
console.log('\nListar Números com forEach()');
numerosArrow.forEach((numero) => console.log(numero));

// Numero elevado ao quadrado
console.log('\nListar Números e multiplicar por ele emsmo');
numerosArrow.forEach((numero) => console.log(numero * numero));

// Listar somente os numeros pares
console.log('\nListar somente os Números Pares');
numerosArrow.forEach((numero) => {
  if (numero % 2 === 0) console.log(numero);
});
