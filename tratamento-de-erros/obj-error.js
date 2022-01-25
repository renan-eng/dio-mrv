//new Error(message, fileName, lineNumber, columnNumber);
// todos os parâmetros são opcionais 

const MeuErro = new Error('Menssagem Inválida');
MeuErro.nome = 'InvalidMessage'

throw MeuErro;