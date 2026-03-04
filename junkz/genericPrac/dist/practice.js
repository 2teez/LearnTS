export class Data {
    // added generic type parameter with constructor
    data = [];
    //constructor(public data: T[]) {}
    get(index = 0) {
        if (index < 0 || index >= this.data.length) {
            throw new Error("Index out of bounds");
        }
        return this.data[index];
    }
    add(item) {
        this.data.push(item);
    }
    set(index, item) {
        if (index < 0 || index >= this.data.length) {
            throw new Error("Index out of bounds");
        }
        this.data[index] = item;
    }
    remove(index) {
        if (index < 0 || index >= this.data.length) {
            throw new Error("Index out of bounds");
        }
        this.data.splice(index, 1);
    }
    size() {
        return this.data.length;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    clear() {
        this.data = [];
    }
    printAll() {
        this.data.forEach((item) => console.log(item));
    }
    forEach(callback) {
        this.data.forEach(callback);
    }
}
export class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    print() {
        console.log(`${this.name} - $${this.price}`);
    }
}
