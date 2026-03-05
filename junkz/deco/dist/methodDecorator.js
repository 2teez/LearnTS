export function time(method, ctx) {
    const methodName = String(ctx.name);
    return function (...args) {
        const start = performance.now();
        console.log(`Calling ${methodName} started.`);
        const result = method.call(this, ...args);
        const end = performance.now();
        console.log(`Finished ${methodName} in ${(end - start).toFixed(2)}ms`);
        return result;
    };
}
export function log(accessor, ctx) {
    const name = String(ctx.name);
    return function (...args) {
        if (ctx.kind === "getter") {
            const result = accessor.call(this, ...args);
            console.log(`${name} gets ${result}`);
            return result;
        }
        else {
            console.log(`${name} set to ${args}`);
            return accessor.call(this, ...args);
        }
    };
}
export function double(field, ctx) {
    const name = String(ctx.name);
    return function (notused, ...args) {
        console.log(`${name} called with ${args}`);
        return field.call(this, ...args) * 2;
    };
}
