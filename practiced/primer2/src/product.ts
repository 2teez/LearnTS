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
export function createProductIterator() {
  const hat = new Product("hat", 100);
  const boots = new Product("boot", 100);
  const umeralla = new Product("umberalla", 23);

  let nextVal;
  return {
    next() {
      switch (nextVal) {
        case undefined:
          nextVal = hat;
          return {
            value: hat,
            done: false,
          };
        case hat:
          nextVal = boots;
          return {
            value: boots,
            done: false,
          };
        case boots:
          nextVal = umeralla;
          return {
            value: umeralla,
            done: false,
          };
        case umeralla:
          nextVal = boots;
          return {
            value: undefined,
            done: true,
          };
      }
    },
  };
}

function* createProductGenerator() {
  yield new Product("hat", 100);
  yield new Product("boot", 100);
  yield new Product("umberalla", 23);
}

export const util = {
  gen: createProductGenerator,
};
