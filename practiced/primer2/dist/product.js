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
export class TaxedProduct extends Product {
    name;
    price;
    tax;
    constructor(name, price, tax = 1.2) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.tax = tax;
    }
    getPriceIncTax() {
        return this.price * this.tax;
    }
    toString() {
        return `TaxedProduct Name: ${this.name}, Price ${this.price}, TaxPrice ${this.getPriceIncTax()}`;
    }
    static process(...product) {
        product.forEach((product) => console.log(product.toString()));
    }
}
