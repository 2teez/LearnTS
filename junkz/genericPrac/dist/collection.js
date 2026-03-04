export class Collection {
    items;
    constructor(items = []) {
        this.items = items;
    }
    add(...items) {
        this.items.push(...items);
    }
    get(name) {
        return this.items.find((item) => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
