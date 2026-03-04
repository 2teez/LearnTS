type shapeType = {
    name: string;
};
export declare class Collection<T extends shapeType> {
    private items;
    constructor(items?: T[]);
    add(...items: T[]): void;
    get(name: string): T;
    get count(): number;
}
export {};
