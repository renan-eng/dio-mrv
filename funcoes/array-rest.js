// Rest é o inverso do spread, passando elementos individuais podemos tratá-los como array dentro da nossa função

function confereTamanho(...args) {
  console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3
