export abstract class Pessoa {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  abstract cansou(): void;

  public visualizar(): void {
    console.log('*'.repeat(50));
    console.log('DADOS DO ATLETA');
    console.log('*'.repeat(50));
    console.log(`Nome do Atleta: ${this.nome}`);
  }
}
