/* function verificaPalindromo(string) {
  if (!string) return "String Invalida";

  return string === string.split("").reverse().join("");

}

console.log(verificaPalindromo('232423'));
 */

// Utilizando o throw para tratamento de entrada invalida na função
function verificaPalindromo(string) {
  if (!string) throw "String Invalida";

  return string === string.split("").reverse().join("");

}

console.log(verificaPalindromo(NaN));