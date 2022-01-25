function verificaPalindromo(string) {
  if (!string) throw "String Invalida";

  return console.log(string === string.split("").reverse().join(""));

}

//o método finally() será executado independentemente do resultado (sucesso ou falha)
function tryCtatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch (error) {
    throw error;
  }
  finally {
    console.log("A string enviada foi: " + string);
  }
}

tryCtatchExemplo('123123');