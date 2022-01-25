/* 
  Objetivo dessa função:
  
    Receber dois números n1 e n2 quaisquer. 
    Comparar se os dois número são diferentes ou iguais,
    E dizser se a soma dos dois numero é maior/menor que 10 e maior/menor que 20.

    Exemplo de entrada: 1, 2. (ou quaisquer número reais)
    Saída esperada: Os numero 1 e 2 {não} são iguais. Sua soma é 3, que é maior/menor que 10 e maior/menor que 20.
 */
function comparaNumeros(n1, n2) {
  const primeiraFrase = criaPrimeiraFrase(n1, n2);
  const segundaFrase = criaSegundaFrase(n1, n2);

  return console.log(`${primeiraFrase} ${segundaFrase}`);
}

function criaPrimeiraFrase(n1, n2) {
  const saoIguais = n1 === n2;
  var nao = "";

  if (!saoIguais) {
    nao = "não";
  }

  return `Os número ${n1} e ${n2} ${nao} são iguais.`;
}

function criaSegundaFrase(n1, n2) {
  let soma = n1 + n2;
  let comparacaoCom10 = "menor";
  let comparacaoCom20 = "menor";

  if (soma > 10) {
    comparacaoCom10 = "maior";
  }
  if (soma > 20) {
    comparacaoCom20 = "maior";
  }

  return `Sua soma é ${soma}, que é ${comparacaoCom10} que 10 e ${comparacaoCom20} que 20.`;
}

comparaNumeros(5, 6);
