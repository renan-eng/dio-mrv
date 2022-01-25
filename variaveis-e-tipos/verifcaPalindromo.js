//abba, ovo, omo
//0123
function verificaPalindromo(string) {
    if (!string) return;
    if (!string.length) return;
    
    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }        
    }
    return true;
}

console.log(verificaPalindromo("ovasdfasdfo"));

//Pode ser feito tbm com: console.log(string === string.split('').reverse().join(''));