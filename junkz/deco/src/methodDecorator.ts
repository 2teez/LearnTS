export function time(method: any, ctx: ClassMethodDecoratorContext) {
  const methodName = String(ctx.name);
  return function (this: any, ...args: any[]): string {
    const start = performance.now();
    console.log(`Calling ${methodName} started.`);
    const result = method.call(this, ...args);
    const end = performance.now();
    console.log(`Finished ${methodName} in ${(end - start).toFixed(2)}ms`);
    return result;
  };
}

export function log(
  accessor: any,
  ctx: ClassSetterDecoratorContext | ClassGetterDecoratorContext,
) {
  const name = String(ctx.name);
  return function (this: any, ...args: any[]) {
    if (ctx.kind === "getter") {
      const result = accessor.call(this, ...args);
      console.log(`${name} gets ${result}`);
      return result;
    } else {
      console.log(`${name} set to ${args}`);
      return accessor.call(this, ...args);
    }
  };
}

export function double<This, FieldType extends number>(
  notused: any,
  ctx: ClassFieldDecoratorContext<This, FieldType>,
) {
  const name = String(ctx.name);
  return function (value: FieldType) {
    console.log(`${name}`);
    return value * 2;
  };
}
