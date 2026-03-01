type numberOnly = number;

export type Product = {
  name: string;
  readonly count: numberOnly;
  readonly price: numberOnly;
  readonly amount: numberOnly;
};

export function makeProduct(product: Product): Product {
  return { ...product, count: product.count + 1, amount: product.amount - 1 };
}

export function addProduct(
  product_list: Product[],
  product: Product,
): Product[] {
  product_list.push(product);
  return product_list;
}

export function printAllProducts(product_list: Product[]): void {
  product_list.forEach((product) => {
    console.log(product);
  });
}
