/* 
Ex. 1:
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro 
this de um objeto criado por você, e depois sem ele.

Método map COM argumento this passado como parâmetro
*/
const maca = {
  value: 2,
}
const laranja = {
  value: 3,
}

function mapComThis(arr, thisArg) {
  return arr.map(function(item){
    return item * this.value;
  }, thisArg);
}

const num = [1, 2]

console.log('this => maca', mapComThis(num, maca))
console.log('this => laranja', mapComThis(num, laranja))


/* 
Método map SEM argumento this passado como parâmetro
*/
function mapSemThis(arr) {
  return arr.map(function(item){
    return item * 2;
  });
}

const ar = [1, 2, 3, 4]
console.log(mapSemThis(ar));