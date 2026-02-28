import { Rectangle, Square, RightTriangle } from "./shapes.js";
const getArea = (shape) => {
    return shape.area();
};
const rectangle = new Rectangle(4, 5);
console.log(`${rectangle.type}: ${getArea(rectangle)}`); // 20
const square = new Square(3);
console.log(`${square.type}: ${getArea(square)}`); // 9
const triangle = new RightTriangle(3, 4);
console.log(`${triangle.type}: ${getArea(triangle)}`); // 6
