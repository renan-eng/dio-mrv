// Let e var - escopos globais ou de bloco
number = 1;

console.log(number + 1);

// let number; acontece um erro pois o a variavel é local e foi declada depois de ser atribuida.
var number; //a varável pode ser declarada em qualquer lugar no código com var pois sera considerada como global e ficará disponível para todo o script


// utilizar sempre let a não ser que precise de utlizar var.
let primeiroNome = "Paulo"
let segundoNome = "Cunha"

if (primeiroNome === "Paulo") {
    let primeiroNome = "João"
    let segundoNome = "Rodrigues"
    console.log ("Escopo local: \n", `${primeiroNome} ${segundoNome}`)
}
console.log("Escopo global: \n", `${primeiroNome} ${segundoNome}`)
// Constante
const FIRST_NAME = "Renan";
// FIRST_NAME = "JOAO"; erro constante não pode ser alterada após sua criação

console.log("Constante: \n", FIRST_NAME)


/* 
    RESUMO DE LET, VAR E CONST

       -----------------------------------------------
       |            |       VAR      | CONST | LET   |
       -----------------------------------------------
       | escopo     | local e global | bloco | bloco |         
       |----------------------------------------------
       | redeclarar |      sim       |  Não  |  Não  |
       | ---------------------------------------------
       | reatribuir |      sim       |  Não  |  sim  |
       | ---------------------------------------------
       | hoisting   |      sim       |  Não  |  Não  |
       -----------------------------------------------
 */