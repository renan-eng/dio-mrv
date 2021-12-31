//Spread: permite passar os elementos de um array individualmente para a chamada de uma função

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2 , 3];

console.log(sum(...numbers));