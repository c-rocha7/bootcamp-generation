import { Stack } from '../pilha/Stack';
import leia = require('readline-sync');

const pilha = new Stack<string>();

let opcao: number;

do {
  console.log('******************************');
  console.log('1 - Adicionar Livro na pilha');
  console.log('2 - Listar todos os livros');
  console.log('3 - Retirar Livro da pilha');
  console.log('0 - Sair');
  console.log('******************************');

  opcao = leia.questionInt('Entre com a opção desejada: ');

  switch (opcao) {
    case 1:
      pilha.push(leia.question('Digite o nome:'));
      console.log('\nPilha: \n');
      pilha.printStack();
      console.log(`\nLivro Adicionado!\n`);
      break;
    case 2:
      console.log('\nLista de Livros na Pilha: \n');
      pilha.printStack();
      console.log('');
      break;
    case 3:
      if (pilha.isEmpty()) {
        console.log('\nA pilha está vazia!\n');
      } else {
        pilha.pop();
        console.log('\nPilha: \n');
        pilha.printStack();
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
