var foo = 0;
switch (foo) {
    case -1:
        console.log('1 negativo');
        break;
    case 0: // foo é 0 então aqui o critério foi correspondido, então esse bloco vai rodar
        console.log(0)
        // NOTA: o break esquecido deveria estar aqui
    case 1: // nenhuma instrução break em 'case 0:' então essa instrução vai rodar também
        console.log(1);
        break; // o programa encontra esse break então não vai continuar para o 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}