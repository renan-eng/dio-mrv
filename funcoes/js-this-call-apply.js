/*******
    This: o que é?
    Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

    Contexto                  Referência 
    Em um objeto (método):    Póprio objeto dono do método
    Sozinha:                  Objeto global(em navegadores, window)
    Função:                   Objeto global
    Evento:                   Elementos que recebeu o evento
*/


(function(){
    console.log(this);
})();


console.log(this); //{}

const pessoa = {
    nome: 'Miguel',
}
const animal = {
    nome: 'Murphy',
}

function getSomething() {
    console.log(this.nome);
}

// Com o método call podemos identiicar qual objetos o this irá referenciar.
getSomething.call(pessoa);

//tabém podemos passar argumentos dentro do método call podemos ident

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

// O apply tem a mesma função do call q é referencial um obj em uma chamada 
// de função, porém é possível passar parãmetros para essa função dentro de
// um array

const myObj2 = {
    n1: 2,
    n2: 4,
};

function soma2(a, b) {
    console.log(this.n1 + this.n2 + a + b);
}

soma2.apply(myObj2, [1, 5]);
