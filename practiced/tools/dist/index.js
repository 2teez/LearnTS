import printAll, { sum } from "./summation.js";
function printMessage(message) {
    console.log(`Message: ${message}`);
}
printMessage("Hello, TypeScript.");
printAll(sum(200, 300, 45).toString());
