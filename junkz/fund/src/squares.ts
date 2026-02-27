export function squares(...numbers: number[]): number[] {
  return numbers.map((number) => number ** 2);
}

export const addUp = (...numbers: number[]): number => {
  return numbers.reduce((sum, num) => sum + num, 0);
};
