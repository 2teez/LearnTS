export function time(method, ctx) {
    const methodName = String(ctx.name);
    return function (...args) {
        const start = performance.now();
        console.log(`Calling ${methodName} started.`);
        const result = method.call(this, ...args);
        const end = performance.now();
        console.log(`Finished ${methodName} in ${end - start}ms`);
        return result;
    };
}
