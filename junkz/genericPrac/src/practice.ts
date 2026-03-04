export class Data<T extends Person | Product> {
  // added generic type parameter with constructor
  private data: T[] = [];
  //constructor(public data: T[]) {}

  public get(index: number = 0): T {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index out of bounds");
    }
    return this.data[index];
  }

  public add(item: T): void {
    this.data.push(item);
  }

  public set(index: number, item: T): void {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index out of bounds");
    }
    this.data[index] = item;
  }

  public remove(index: number): void {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index out of bounds");
    }
    this.data.splice(index, 1);
  }

  public size(): number {
    return this.data.length;
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  public clear(): void {
    this.data = [];
  }

  public printAll(): void {
    this.data.forEach((item) => console.log(item));
  }

  public forEach(callback: (item: T) => void): void {
    this.data.forEach(callback);
  }
}

export type Person = {
  name: string;
  age: number;
};

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  public print(): void {
    console.log(`${this.name} - $${this.price}`);
  }
}
