//Uma função passaada como argumento para outras
//Utilizando callbacks, você tem o meior controle da ordem de chamadas

const calc = function(operacao, n1, n2) {
    return operacao(n1, n2);
}

const soma = function(n1, n2){
    return n1 + n2;
}

const sub = function(n1, n2){
    return n1 - n2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub)
console.log(resultSoma)
