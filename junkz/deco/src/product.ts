import { time } from "./methodDecorator.js";
import { log } from "./methodDecorator.js";

export class Product {
  @double
  private taxRate = 20;
  constructor(
    public name: string,
    public price: number,
  ) {}

  @time
  getDetails(): string {
    return `Name: ${this.name}, Price: $${this.price}`;
  }

  getPrice(): number {
    return this.price;
  }

  @log
  get tax(): number {
    return (this.price * this.taxRate) / 100;
  }

  @log
  set tax(value: number) {
    this.taxRate = value;
  }
}
