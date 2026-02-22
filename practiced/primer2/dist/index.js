import { createProductIterator, TaxedProduct } from "./product.js";
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
//
TaxedProduct.process(new TaxedProduct("Hat", 100, 1.2), new TaxedProduct("Boots", 100));
// using iterator
let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
    console.log(`${result.value}`);
    result = iterator.next();
}
