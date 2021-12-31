const helloWorld = function() {
  return "Hello World";
}

// essa função pode ser rescrita da seguinte forma:

const helloWorld = () => { 
  return "Hello World";
}

// economiza espaço e tempo na execução
// ou entao ainda mais reduzido como:

const helloWorld = () => "Hello World";

//se a função for somente 1 parâmetro nao precisa coloca parênteses

const soma = (a, b) => a + b;
soma(4, 5)

//somente um paraêmtro
const soma = a => a;
soma(4)

//arrow function NÃO faz hoisting (nao é possível chamar a função antes dela ser criada)

// Outras restrições de arrow function:
//  - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funionar;
//  - não existe o objeto "arguments"
//  - O constructor (ex: new MeuObjeto()) tbm não pode ser utilizado.

//NÃO UTILIZA ARROW FUNCTION PARA MÉTODOS DE OBJETOS