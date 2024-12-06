const leia = require('readline-sync');

let notas = [],
  medias = [];

for (let aluno = 0; aluno < 10; aluno++) {
  notas[aluno] = [];
  let soma = 0;

  for (let index = 0; index < 4; index++) {
    let nota = leia.questionFloat(
      `Digite a ${index + 1}° nota do ${aluno + 1}° aluno: `
    );
    notas[aluno][index] = nota;
    soma += nota;
  }

  medias[aluno] = soma / 4;
}

for (let media = 0; media < 10; media++) {
  console.log(
    `A média do participante ${media + 1} é: ${medias[media].toFixed(1)}`
  );
}
