import { Triatleta } from './Triatleta';

function main() {
  const atleta1 = new Triatleta('Teste');

  atleta1.visualizar();
  
  atleta1.aquecer();
  atleta1.nadar();
  atleta1.pedalar();
  atleta1.correr();
  atleta1.cansou();
}

main();
