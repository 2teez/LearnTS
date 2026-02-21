export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
  toString() {
    return `Product Name: ${this.name}, Price ${this.price}`;
  }
}
