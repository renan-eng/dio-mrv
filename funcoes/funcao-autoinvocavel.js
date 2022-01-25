//Uma função anônima entre parêntesse, seguida por outro par de 
//parênteses, que representa sua chamada

(
    function() {
        let name = "Renan Eduardo"
        return name;
    }
)()

//Retorno Renan Eduardo

const nome = (
    function() {
        let name = "Renan Eduardo"
        return name;
    }
)()

console.log(nome);

(
    function(a, b) {
        return (console.log(a + b));
    }
)(1, 2)
