/* 
Ex. 1:
Filtre e retorne todos os números pares de um array.
*/

function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0;
}

const arr = [1, 23, 34, 55, 66];

console.log(filtraPares(arr));