import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

fila.enqueue('Cauã');
fila.enqueue('Rafael');
fila.enqueue('Laura');

// fila.enqueue(readlinesync.question('Digite o seu nome: '));

fila.printQueue();

console.log(fila.contains('Cauã'));

console.log(fila.count());

fila.dequeue();

fila.printQueue();
