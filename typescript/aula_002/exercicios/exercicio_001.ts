import { Queue } from '../fila/Queue';
import leia = require('readline-sync');

const fila = new Queue<string>();

let opcao: number;

do {
  console.log('******************************');
  console.log('1 - Adicionar Cliente na Fila');
  console.log('2 - Listar todos os Clientes');
  console.log('3 - Retirar CLiente da Fila');
  console.log('0 - Sair');
  console.log('******************************');

  opcao = leia.questionInt('Entre com a opção desejada: ');

  switch (opcao) {
    case 1:
      fila.enqueue(leia.question('Digite o nome:'));
      console.log('');
      fila.printQueue();
      console.log(`\nCliente Adicionado!\n`);
      break;
    case 2:
      console.log('');
      fila.printQueue();
      console.log('');
      break;
    case 3:
      if (fila.isEmpty()) {
        console.log('\nA fila está vazia!\n');
      } else {
        fila.dequeue();
        console.log('');
        fila.printQueue();
        console.log(`\nCliente Chamado!\n`);
      }
      break;
    case 0:
      console.log('\nPrograma Finalizado!\n');
      break;
    default:
      console.log('\nPor favor escolha uma das opções corretas!\n');
      break;
  }
} while (opcao != 0);
