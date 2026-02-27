import { squares, addUp } from "./squares.js";

console.log(squares(34, 9, 2, 12, 6));
console.log(addUp(34, 9, 2, 12, 6));
console.log(addUp(...squares(34, 9, 2, 12, 6)));
console.log(addUp());
