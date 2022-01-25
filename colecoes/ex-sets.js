let arr1 = [30, 30, 40, 5, 223, 2049, 3034, 5];

function arrUnico(arr) {
  let arrUnico = new Set(arr);
  return [...arrUnico];
}

console.log(arrUnico(arr1));