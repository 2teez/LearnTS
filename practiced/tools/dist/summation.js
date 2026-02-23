export function sum(...numbers) {
    return numbers.reduce((num, val) => num + val, 0);
}
export default function (...strs) {
    console.log(`${strs.join(",")}`);
}
