function verificaPalindromo(string) {
  if (!string) throw "String Invalida";

  return string === string.split("").reverse().join("");

}

//Com o block tray...catch podemos exibir somente a mensagem de erro que definimos anteriormente no throw ou tratar da
//maneira como quisermos dentro do bloco catch{};
function tryCtatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch (error) {
    console.log(error);
  }
}

tryCtatchExemplo('');

function tryCtatchExemplo2(string) {
  try {
    verificaPalindromo(string)
  }
  catch (error) {
    throw error;
  }
}

tryCtatchExemplo2('');