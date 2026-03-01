import {
  Product,
  addProduct,
  makeProduct,
  printAllProducts,
} from "./product.js";

const product_list: Product[] = [];
const products_name = ["Iphone", "Laptop", "iwatch"];
for (
  let index = 0, counter = 15;
  index < products_name.length;
  index++, counter--
) {
  addProduct(
    product_list,
    makeProduct({
      name: products_name[index],
      count: index,
      price: 100,
      amount: counter,
    }),
  );
}

printAllProducts(product_list);
