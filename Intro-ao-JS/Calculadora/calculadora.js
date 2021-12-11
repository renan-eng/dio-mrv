function calculadora() {
  //inicializando n1 e n2 com valor falso para que entre na minha verificação forçada
  var n1 = NaN;
  var n2 = NaN;

  const operacao = prompt("Escula uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)\n 7 - Para sair");
  console.log(operacao);

  if (operacao == "1" || operacao == "2" || operacao == "3" || operacao == "4" || operacao == "5" || operacao == "6") {
    //Condição para realizar a operação é que valor deve ser númerico.
    while (!n1) {
      console.log(n1);
      n1 = Number(prompt("Insira o primeiro valor: "));
    }
    while (!n2) {
      console.log(n2);
      n2 = Number(prompt("Insira o segundo valor: "));
    }

    let resultado;
    //Função que faz a soma
    function soma() {
      resultado = n1 + n2;
      console.log(resultado);
      alert(`A soma de ${n1} + ${n2} é igual a ${resultado}`);
    }
    //Função que faz a subtração
    function subtracao() {
      resultado = n1 - n2;
      console.log(resultado);
      alert(`A subtração de ${n1} - ${n2} é igual a ${resultado}`);
    }
    //Função que faz a multiplicação
    function multiplicacao() {
      resultado = n1 * n2;
      console.log(resultado);
      alert(`A multiplicação de ${n1} * ${n2} é igual a ${resultado}`);
    }
    //Função que faz a divisão real
    function divisaoReal() {
      resultado = n1 / n2;
      console.log(resultado);
      alert(`O divisião entre ${n1} / ${n2} é igual a ${resultado}`);
    }
    //Função que faz o resto entre dois número
    function divisaoInteira() {
      resultado = n1 % n2;
      console.log(resultado);
      alert(`O resto da divisão entre ${n1} / ${n2} é igual a ${resultado}`);
    }
    //Função que faz a potenciação
    function potenciacao() {
      resultado = n1 ** n2;
      console.log(resultado);
      alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
    }

    switch (operacao) {
      case "1":
        //console.log("bug");
        soma();
        break;
      case "2":
        subtracao();
        break;
      case "3":
        multiplicacao();
        break;
      case "4":
        divisaoReal();
        break;
      case "5":
        divisaoInteira();
        break;
      case "6":
        potenciacao();
        break;
      case "7":
        potenciacao();
        break;
      default:
        alert("Valor digitado inválido, tente novamente1.");
    }
  } else if (operacao == "7") {
    return alert("Obrigado por usar essa calculadora.");
  } else {
    calculadora();
  }
  calculadora();
}

calculadora();
