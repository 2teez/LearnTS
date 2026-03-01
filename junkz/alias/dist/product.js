export function makeProduct(product) {
    return { ...product, count: product.count + 1, amount: product.amount - 1 };
}
export function addProduct(product_list, product) {
    product_list.push(product);
    return product_list;
}
export function printAllProducts(product_list) {
    product_list.forEach((product) => {
        console.log(product);
    });
}
