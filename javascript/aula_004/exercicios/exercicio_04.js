const leia = require('readline-sync');

let totalBackend = 0,
  totalMulheresFrontend = 0,
  totalHomensMobile40 = 0,
  totalNaoBinariosFullStack30 = 0,
  totalPessoas = 0,
  somaIdades = 0;

while (true) {
  let idade = leia.questionInt('Digite sua idade: ');

  let genero = leia.questionInt(
    'Digite a identidade de gênero (1-Mulher Cis, 2-Homem Cis, 3-Não Binário, 4-Mulher Trans, 5-Homem Trans, 6-Outros): '
  );
  let desenvolvedor = leia.questionInt(
    'Digite o tipo de desenvolvedor (1-Backend, 2-Frontend, 3-Mobile, 4-FullStack):'
  );

  totalPessoas++;
  somaIdades += idade;

  if (desenvolvedor === 1) {
    totalBackend++;
  } else if (desenvolvedor === 2 && (genero === 1 || genero === 4)) {
    totalMulheresFrontend++;
  } else if (
    desenvolvedor === 3 &&
    (genero === 2 || genero === 5) &&
    idade > 40
  ) {
    totalHomensMobile40++;
  } else if (desenvolvedor === 4 && genero === 3 && idade < 30) {
    totalNaoBinariosFullStack30++;
  }

  let continuar = leia.keyInYN('Deseja continuar? ');
  if (continuar === false) {
    break;
  }
}

let mediaIdades = somaIdades / totalPessoas;

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${totalBackend}
            \nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFrontend}
            \nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobile40}
            \nTotal de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalNaoBinariosFullStack30}
            \nTotal de pessoas que responderam à pesquisa: ${totalPessoas}
            \nMédia de idade das pessoas que responderam à pesquisa: ${mediaIdades.toFixed(
              2
            )}`);
