const leia = require('readline-sync');

const palavra1 = ['Vertebrado', 'Invertebrado'];
const palavra2 = ['Ave', 'Mamífero', 'Inseto', 'Anelídeo'];
const palavra3 = ['Carnívoro', 'Onívoro', 'Herbívoro', 'Hematófago'];

let tipo1 = leia.keyInSelect(palavra1, 'Qual o tipo?');
let tipo2 = leia.keyInSelect(palavra2, 'Qual o tipo?');
let tipo3 = leia.keyInSelect(palavra3, 'Qual o tipo?');

// if (tipo1 == 0) {
//   let palavra2 = ['Ave', 'Mamífero'];
//   let tipo2 = leia.keyInSelect(palavra2, 'Qual o tipo?');
//   if (tipo2 == 0) {
//     let palavra3 = ['Carnívoro', 'Onívoro'];
//     let tipo3 = leia.keyInSelect(palavra3, 'Qual o tipo?');
//     if (tipo3 == 0) {
//       console.log('\nÁguia');
//     } else if (tipo3 == 1) {
//       console.log('\nPomba');
//     } else {
//       process.exit(0);
//     }
//   } else if (tipo2 == 1) {
//     let palavra3 = ['Onívoro', 'Herbívoro'];
//     let tipo3 = leia.keyInSelect(palavra3, 'Qual o tipo?');
//     if (tipo3 == 0) {
//       console.log('\nHomem');
//     } else if (tipo3 == 1) {
//       console.log('\nVaca');
//     } else {
//       process.exit(0);
//     }
//   } else {
//     process.exit(0);
//   }
// } else if (tipo1 == 1) {
//   let palavra2 = ['Inseto', 'Anelídeo'];
//   let tipo2 = leia.keyInSelect(palavra2, 'Qual o tipo?');
//   if (tipo2 == 0) {
//     let palavra3 = ['Hematófago', 'Herbívoro'];
//     let tipo3 = leia.keyInSelect(palavra3, 'Qual o tipo?');
//     if (tipo3 == 0) {
//       console.log('\nPulga');
//     } else if (tipo3 == 1) {
//       console.log('\nLagarta');
//     } else {
//       process.exit(0);
//     }
//   } else if (tipo2 == 1) {
//     let palavra3 = ['Hematófago', 'Onívoro'];
//     let tipo3 = leia.keyInSelect(palavra3, 'Qual o tipo?');
//     if (tipo3 == 0) {
//       console.log('\nSanguessuga');
//     } else if (tipo3 == 1) {
//       console.log('\nMinhoca');
//     } else {
//       process.exit(0);
//     }
//   } else {
//     process.exit(0);
//   }
// } else {
//   process.exit(0);
// }

if (tipo1 == 0 && tipo2 == 0 && tipo3 == 0) {
  console.log('\nÁguia');
} else if (tipo1 == 0 && tipo2 == 0 && tipo3 == 1) {
  console.log('\nPomba');
} else if (tipo1 == 0 && tipo2 == 1 && tipo3 == 1) {
  console.log('\nHomem');
} else if (tipo1 == 0 && tipo2 == 1 && tipo3 == 2) {
  console.log('\nVaca');
} else if (tipo1 == 1 && tipo2 == 2 && tipo3 == 3) {
  console.log('\nPulga');
} else if (tipo1 == 1 && tipo2 == 2 && tipo3 == 2) {
  console.log('\nLagarta');
} else if (tipo1 == 1 && tipo2 == 3 && tipo3 == 3) {
  console.log('\nSanguessuga');
} else if (tipo1 == 1 && tipo2 == 3 && tipo3 == 1) {
  console.log('\nMinhoca');
} else {
  console.log('\nCombinações Inexistências!');
}
