import leia = require('readline-sync');

const cores: Array<string> = new Array<string>();
let contador: number = 0;

while (contador < 5) {
  cores.push(leia.question('Digite uma cor: '));
  contador++;
}

console.log();

for (let cor of cores) {
	console.log(`${cor}`);
}

console.log();

cores.sort();

for (let cor of cores) {
  console.log(`${cor}`);
}
