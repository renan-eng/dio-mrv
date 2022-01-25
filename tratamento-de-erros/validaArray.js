function validaArray (arr, num) {
  try {
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo Object');
  
    if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');
  
    if(arr.length !== num) throw new RangeError('Tamanho inválido!');

    return arr;  
  } catch (e) {
    if(e instanceof RangeError) {
      console.error('Este erro é um RangeError.');
      console.log(e.message);
      //console.log(e.stack);
    } else if(e instanceof TypeError) {
      console.error('Este erro é um TypeError.');
      console.log(e.message);
      //console.log(e.stack);
    } else if(e instanceof ReferenceError) {
      console.error('Este erro é um ReferenceError.');
      console.log(e.message);
      //console.log(e.stack);
    } else {
      console.log("Tipoo de erro não esperado: " + e);
    }
  }  
}

console.log(validaArray([1, 2, 3, 4, 5], 5));