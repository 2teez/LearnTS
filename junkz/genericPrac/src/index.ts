import { Data, Person } from "./practice.js";
import { Product } from "./practice.js";
import { Collection } from "./collection.js";

const personData = new Data<Person>();
personData.add({ name: "Alice", age: 30 });
personData.add({ name: "Bob", age: 25 });
console.log(personData.get());
personData.printAll();

const productData = new Data<Product>();
productData.add(new Product("Apple", 1.99));
productData.add(new Product("Banana", 0.99));
productData.printAll();

type PersonProduct = Person | Product;

const data = new Data<PersonProduct>();
data.add({ name: "Alice", age: 30 });
data.add(new Product("Apple", 1.99));
data.add(new Product("Banana", 0.99));
data.printAll();

data.forEach((item) => {
  if (item instanceof Product) {
    console.log(item.price);
  }
});

// Collection usage
const collection: Collection<Person> = new Collection();
collection.add({ name: "Alice", age: 30 });
collection.add({ name: "Bob", age: 25 });
console.log(collection.get("Alice"));
console.log(collection.count);
//
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
const productCollection = new Collection<Product>(products);
console.log(productCollection.get("Running Shoes"));
console.log(productCollection.count);
