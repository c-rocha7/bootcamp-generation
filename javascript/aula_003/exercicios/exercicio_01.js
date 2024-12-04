const leia = require('readline-sync');

let numero1 = leia.questionInt('Digite o primeiro número: ');
let numero2 = leia.questionInt('Digite o segundo número: ');
let numero3 = leia.questionInt('Digite o terceiro número: ');

let soma = numero1 + numero2;

if (soma > numero3) {
  console.log(
    `A soma do primeiro número: ${numero1} com o segundo número: ${numero2} é = ${soma} e é maior que o terceiro número ${numero3}`
  );
} else if (soma < numero3) {
  console.log(
    `A soma do primeiro número: ${numero1} com o segundo número: ${numero2} é = ${soma} e é menor que o terceiro número ${numero3}`
  );
} else {
  console.log(
    `A soma do primeiro número: ${numero1} com o segundo número: ${numero2} é = ${soma} e é igual que o terceiro número ${numero3}`
  );
}
