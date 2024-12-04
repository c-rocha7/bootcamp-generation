const leia = require('readline-sync');

let nome = leia.question('Digite o nome do doador: ');
let idade = leia.questionInt('Digite a idade do doador: ');
let primeiraDoacao = leia.keyInYN('Primeira doação de sangue? ');

if (idade >= 60 && idade <= 69 && primeiraDoacao == false) {
  console.log(`${nome} está apto(a) para doar sangue! velho`);
} else if (idade >= 18 && idade <= 59) {
  console.log(`${nome} está apto(a) para doar sangue! novo`);
} else {
  console.log(`${nome} não está apto(a) para doar sangue!`);
}
