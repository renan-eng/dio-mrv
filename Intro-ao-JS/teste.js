/************** COMENTÁRIOS *****************/
// var y = 0; este é um exemplo de comentário atalho Crtl + ;
var x = 1

/* Este é um comentário de várias linhas
var x = 1
var x = 1
var x = 1
var x = 1
var x = 1
*/ 


/************** VARIÁVEIS *****************/
var preco = 2; //declarar variaveis com nomes relevantes ao que ela representa
var desconto = 0.2;

const PRECO = 2; //declarar constantes maiúsculas

//as variáveis podem sofre mudanças de valores ao longo do código enquanto que constantes se mantém fixas.


/************** FUNÇÕES *****************/
function soma(a, b){
  // console.log(a + b); exibe resultad da soma de a mais b no console de depuração
  return a + b; // retorna a soma como um valor que pode ser utilizado por outras funções 
}

console.log(soma(2,5)); //retorna 7 -> podemos utilizar node teste.js para executar e exibir essa função no console bash

resultado = soma(3,5); //retorna 8

console.log(resultado);