import { printDetails } from "./utils.js";
const hat = { name: "Hat", price: 100 };
const boots = { name: "Boots", price: 100 };
const gloves = { name: "Gloves", price: 100 };
const socks = { name: "Socks", price: 100 };
const shoes = { name: "Shoes", price: 100 };
let products = [hat, boots, gloves, socks, shoes];
products.forEach((product) => console.log(printDetails(product)));
