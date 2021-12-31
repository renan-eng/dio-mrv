const meuObject = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

forInExemplo(meuObject);
/*
nome
idade
cidade
*/

function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

forInExemplo2(meuObject);
/*
João
20
Salvador
*/