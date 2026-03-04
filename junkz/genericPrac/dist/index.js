import { Data } from "./practice.js";
import { Product } from "./practice.js";
const personData = new Data();
personData.add({ name: "Alice", age: 30 });
personData.add({ name: "Bob", age: 25 });
console.log(personData.get());
personData.printAll();
const productData = new Data();
productData.add(new Product("Apple", 1.99));
productData.add(new Product("Banana", 0.99));
productData.printAll();
const data = new Data();
data.add({ name: "Alice", age: 30 });
data.add(new Product("Apple", 1.99));
data.add(new Product("Banana", 0.99));
data.printAll();
data.forEach((item) => {
    if (item instanceof Product) {
        console.log(item.price);
    }
});
