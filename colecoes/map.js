/* 
    Map:

  - Uma coleção de arrays no formato [chave, valor]
  - Pode ser iterado por um loop for...of
 */
const myMap = new Map();

myMap.set('apple', 'fruit');
console.log(myMap);


console.log(myMap.get('apple'));

console.log(myMap.delete('apple'));

console.log(myMap.delete('apple'));


/* 
- Maps poddem ter chaves de qualquer tipo (objetos só podem ser strings)
- Maps possuem a propriedade length
- Maps são mais fáceis de iterar
- Utilzado quando o valor das chaves é desconhecido
- Os valores tem o mesmo tipo (no objeto os valores podem ser de qualquer tipo ex: str, num, bolean)
*/