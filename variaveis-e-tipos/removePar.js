function removePar(arr) {
    if (!arr) return -1;
    if (!arr.length) return -1;
    if (arr.every(function(element) {return typeof element !== 'number';})) return "Somente números permitidos";

    for ( let i = 0; i < arr.length; i++) {        
        if (arr[i] % 2 === 0) {
            console.log(`${arr[i]} será trocado por 0`)
            arr[i] = 0;                                
        }
    } 
    return arr;    
}

let arr = [1, 3, 0, 6, 80, 33,  23, 90]
//arr = []
//arr = ['lksdjfasdf', 'dfgsd']

console.log(removePar(arr));