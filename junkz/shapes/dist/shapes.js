export class Circle {
    radius;
    type;
    constructor(radius, type = "circle") {
        this.radius = radius;
        this.type = type;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
export class RightTriangle {
    base;
    height;
    type;
    constructor(base, height, type = "right triangle") {
        this.base = base;
        this.height = height;
        this.type = type;
    }
    area() {
        return (this.base * this.height) / 2;
    }
}
export class Rectangle {
    width;
    height;
    type;
    constructor(width, height, type = "rectangle") {
        this.width = width;
        this.height = height;
        this.type = type;
    }
    area() {
        return this.width * this.height;
    }
}
export class Square extends Rectangle {
    side;
    type;
    constructor(side, type = "square") {
        super(side, side, type);
        this.side = side;
        this.type = type;
    }
}
