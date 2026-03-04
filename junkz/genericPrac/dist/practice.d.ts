export declare class Data<T extends Person | Product> {
    private data;
    get(index?: number): T;
    add(item: T): void;
    set(index: number, item: T): void;
    remove(index: number): void;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
    printAll(): void;
    forEach(callback: (item: T) => void): void;
}
export type Person = {
    name: string;
    age: number;
};
export declare class Product {
    name: string;
    price: number;
    constructor(name: string, price: number);
    print(): void;
}
