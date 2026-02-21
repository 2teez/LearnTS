export class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `Product Name: ${this.name}, Price ${this.price}`;
    }
}
