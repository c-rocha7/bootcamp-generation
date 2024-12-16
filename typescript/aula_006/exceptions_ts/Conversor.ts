try {
  const resultado = converte('abc');
  console.log(resultado);
} catch (error: any) {
  if (error instanceof TypeError)
    console.error('\n Você digitou um valor que não é do tipo string!');
  else console.error('\n Erro Inesperado!', error.message);
} finally {
  console.log('\nPrograma Finalizado!');
}
export function converte(conteudo: any): string {
  return conteudo.toUpperCase();
}
