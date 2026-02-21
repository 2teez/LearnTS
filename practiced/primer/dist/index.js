let hatPrice = 100;
console.log(`Hat Price: ${hatPrice}`);
let bootsPrice = 100;
console.log(`Hat Price: ${bootsPrice}`);
if (hatPrice === bootsPrice) {
    console.log(`hatPrice and bootsPrice is the same.`);
}
else {
    console.log(`hatPrice and bootsPrice is NOT the same.`);
}
let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price is ${totalPrice}.`);
let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
// using objects
let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    writeDetails() {
        console.log(`${this.name}, ${this.price} ${this.priceIncTax}`);
    },
};
//hat.writeDetails.bind(hat);
hat.writeDetails();
export {};
