import { sum } from "./summation.js";
test("check summation of three numbers 10, 20 and 30", () => {
    let result = sum(10, 20, 30);
    expect(result).toBe(60);
});
