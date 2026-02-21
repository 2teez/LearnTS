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
export {};
