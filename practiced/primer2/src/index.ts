import { Product } from "./product.js";

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
