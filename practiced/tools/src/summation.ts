export function sum(...numbers: number[]): number {
  return numbers.reduce((num, val) => num + val, 0);
}

export default function (...strs: string[]) {
  console.log(`${strs.join(",")}`);
}
