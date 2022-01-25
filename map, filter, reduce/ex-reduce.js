/* 
Ex. 1: 
Somar todos os itens de um array 
*/

function somaNumeros(array) {
return arr.reduce((prev, cur) => {
  return prev + cur;
});
}

const arr = [1, 2];

console.log(somaNumeros(arr));

/* 
Ex. 2: 
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

const lista = [
  {
    nome: 'sabao',
    preco: 30
  },
  {
    nome: 'toalha',
    preco: 12
  },
  {
    nome: 'nutella',
    preco: 30
  }
];

const saldoDisp = 100;

function calcSaldo (saldoDisp, lista) { 
  return lista.reduce((prev, cur, index) => {
    console.log('rodada', index + 1);
    console.log({prev});
    console.log({cur});
    return prev - cur.preco;
  }, saldoDisp);
}

console.log(calcSaldo(saldoDisp, lista));