import type { Shape } from "Shapes";

export class Circle implements Shape {
  constructor(
    public radius: number,
    public type: string = "circle",
  ) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class RightTriangle implements Shape {
  constructor(
    public base: number,
    public height: number,
    public type: string = "right triangle",
  ) {}

  area(): number {
    return (this.base * this.height) / 2;
  }
}

export class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number,
    public type: string = "rectangle",
  ) {}

  area(): number {
    return this.width * this.height;
  }
}

export class Square extends Rectangle {
  constructor(
    public side: number,
    public type: string = "square",
  ) {
    super(side, side, type);
  }
}
