export function printDetails(product: { name: string; price: number }): string {
  return `${product.name} - $${product.price}`;
}
