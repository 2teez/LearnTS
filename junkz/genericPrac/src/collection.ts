type shapeType = { name: string };

export class Collection<T extends shapeType> {
  constructor(private items: T[] = []) {}

  add(...items: T[]) {
    this.items.push(...items);
  }

  get(name: string): T {
    return this.items.find((item) => item.name === name);
  }

  get count(): number {
    return this.items.length;
  }
}
