const {addition, subtraction, multiplication, division, modulation} = require("../sercvices/arithmeticServices");

describe("Arithmetic service tests", () => {

    it("it should return 6 by adding 3 and 3", () => {
        expect(addition(3, 3)).toBe(6);
    });

    it("it should return 9 by multiplying 3 and 3", () => {
        expect(multiplication(3, 3)).toBe(9);
    });

    it("it should return 1 by dividing 3 and 3", () => {
        expect(division(3, 3)).toBe(1);
    });

    it("it should return 0 by subtracting 3 and 3", () => {
        expect(subtraction(3, 3)).toBe(0);
    });

    it("it should return 0 by subtracting 3 and 3", () => {
        expect(modulation(4, 2)).toBe(0);
    });

})
