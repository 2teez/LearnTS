export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
  toString() {
    return `Product Name: ${this.name}, Price ${this.price}`;
  }
}

export class TaxedProduct extends Product {
  constructor(
    public name: string,
    public price: number,
    public tax: number = 1.2,
  ) {
    super(name, price);
  }

  getPriceIncTax(): number {
    return Number(this.price) * this.tax;
  }

  toString() {
    return `TaxedProduct Name: ${this.name}, Price ${this.price}, TaxPrice ${this.getPriceIncTax()}`;
  }

  static process(...product: Product[]) {
    product.forEach((product) => console.log(product.toString()));
  }
}
