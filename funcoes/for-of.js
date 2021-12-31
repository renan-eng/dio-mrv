// Itera entre os indicies de um array ou string
function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra);