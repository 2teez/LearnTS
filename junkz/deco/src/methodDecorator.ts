export function time(...args: any[]) {
  return function (): string {
    return "Hello, Decorator!";
  };
}
