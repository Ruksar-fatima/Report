import sub from "./sub.js";

describe ("test for sub fnx", () => {
    test("subtracts 5 - 3 = 2", () => {
        expect(sub(5, 3)).toBe(2);
    });
})