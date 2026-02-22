import {
  createProductIterator,
  Product,
  TaxedProduct,
  util,
} from "./product.js";

let hat = {
  name: "Hat",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`${hat.toString()}`);

let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function () {
  return `toString: ${this.name}: ${this.price}, ${this.getPriceIncTax()}`;
};

console.log(`${hat.toString()}`);
// using Product class
let hatProduct = new Product("Hat", 100);
let bootsProduct = new Product("Boots", 200);
// using the js clases
console.log(`${hatProduct.toString()}`);
console.log(`${bootsProduct.toString()}`);
//
TaxedProduct.process(
  new TaxedProduct("Hat", 100, 1.2),
  new TaxedProduct("Boots", 100),
);

// using iterator
let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
  console.log(`${result.value}`);
  result = iterator.next();
}

// using generator
let generator = util.gen();
let genResult = generator.next();
while (!genResult.done) {
  console.log(`${genResult.value}`);
  genResult = generator.next();
}
// using object in js/ts
let data = {
  hat: new Product("Hat", 100),
  boots: new Product("boots", 100),
};
//
// below works in plain js
//data.boots = new Product("boots", 100);
Object.keys(data).forEach((key) => console.log(`${data[key]}`));
Object.values(data).forEach((value) => console.log(`${value}`));

// usisng map
let myMap = new Map();
myMap.set("hat", new Product("hat", 100));
myMap.set("boots", new Product("boot", 100));
// print it all out
[...myMap.keys()].forEach((key) => console.log(`${myMap.get(key).toString()}`));
