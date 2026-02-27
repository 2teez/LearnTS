export function squares(...numbers) {
    return numbers.map((number) => number ** 2);
}
export const addUp = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};
