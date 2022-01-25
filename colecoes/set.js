/* 
Sets:
- Sets são estruturas que armazenam apenas valores únicos (NAO SE REPETEM NUNCA)
*/

const mySet = new Set();

mySet.add(1);
mySet.add(5);
console.log(mySet);


console.log(mySet.has(1));

console.log(mySet.has(3));

mySet.delete(5);
console.log(mySet);

/* 
Set vs Arrays:

- Possui valores únicos
- Em vez da propriedade length, consulta-se o número de regisros pela propriedade size
- Não possui os métodos map, filter, reduce etc..
*/