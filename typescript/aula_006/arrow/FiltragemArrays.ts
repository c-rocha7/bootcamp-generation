let numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [
  1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7,
];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
  'São Paulo',
  'Rio de Janeiro',
  'Minas Gerais',
  'Espirito Santo',
  'Rio Grande do Sul',
  'Santa Catarina',
  'Paraná',
];

let estadosRepetidos: Array<string> = [
  'São Paulo',
  'Rio de Janeiro',
  'Minas Gerais',
  'Espirito Santo',
  'São Paulo',
  'Rio de Janeiro',
  'São Paulo',
  'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
  'Goiás',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Brasília',
];

// Método map()
console.log('\nMultiplicar todos os números por 3 e retornar um novo array\n');
let numerosMultiplicadosPor3 = numerosOrdenados.map((n) => n * 3);
console.dir(numerosMultiplicadosPor3);

// Método filter()
console.log('\nListar todos os Estados que contém a palavra Rio\n');
let estadosContemRio = estados.filter((e) => e.includes('Rio'));
console.dir(estadosContemRio);
console.log('\nListar todos os Estados que terminam com a letra A\n');
let estadosTerminamLetraA = estados.filter((e) => e.endsWith('a'));
console.dir(estadosTerminamLetraA);
console.log('\nListar todos os Estados que começam com a letra S\n');
let estadosComecamLetraS = estados.filter((e) => e.startsWith('s'));
console.dir(estadosComecamLetraS);

// Método reduce()
console.log(
  '\nRemover todos os elementos repetidos do array Estados Repetidos\n'
);
let estadosSemRepeticoes = estadosRepetidos.reduce(
  (acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1) acumulador.push(estado);
    return acumulador;
  },
  []
);
console.dir(estadosSemRepeticoes);

// Método find()
console.log('\nEncontrar o primeiro número da lista maior do que 9\n');
let numerosMaior9 = numerosRepetidos.find((n) => n > 9);
console.log(numerosMaior9);

// Método findIndex()
console.log(
  '\nfindIndex() - Encontrar o Índice do primeiro número da lista maior do que 9\n'
);
let indiceNumerosMaior9 = numerosRepetidos.findIndex((n) => n > 9);
console.log(indiceNumerosMaior9);

// Spread Operator
console.log('\nSpread Operator - Combinar 2 arrays\n');
const arrayCombinado: number[] = [...numeros, ...numerosDesordenados];
console.dir(arrayCombinado);
