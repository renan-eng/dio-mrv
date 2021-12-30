//Arguments usa todos os argumentos passado para a função dentro de um array
function findMax(){
    let max = -Infinity;

    for(let i=0; i < arguments.length; i++){
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}
findMax(1, 2, 3, 4, 50, 90, 1)
//90