function Cat(owner, cat) {
  this.owner = owner;
  this.cat = cat;
}

Cat.prototype.cuteStatement = function () {
  console.log(`${this.owner} loves ${this.cat}`);
};

const Kuro = new Cat("Victor", 'Kuro');

Kuro.cuteStatement();

Cat.prototype.meow = function () {
  console.log(`${this.cat} meows meows nya nya!`);
};

console.log(Kuro.meow());
