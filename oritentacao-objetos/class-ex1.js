// Primeiro exemplo de uma classe em JS

class Animal {
  constructor(type = 'animal') {
    this.type = type;
  }

  get type() { 
    return this._type; 
  }

  set type(val) { 
    return this._type = val.toUpperCase();
  }

  makeSound() {
    console.log("Making animal sound...");
  }
}

let a = new Animal();
console.log(a.type); //ANIMAL

//Classe filho 'Cat' , exemplo de herança
class Cat extends Animal {
  constructor() {
    super('cat')
  }

  makeSound() {
    super.makeSound();
    console.log("Meow");
  }
}

let b = new Cat();
console.log(b.type); //CAT