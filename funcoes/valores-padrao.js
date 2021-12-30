// Num = 1 define que se num for undefined ele automaticamente asssumirá o valor de 1
function exponencial(array, num = 1) {
    const result = [];

    for(let i = 0; i <  array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4]) 
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]
