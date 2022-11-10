const {add, multiply, divide, subtract, deconstructEquation,chooseArithmeticFunction} = require("../sercvices/arithmeticServices");
// Very basic tests, but doing TDD
describe("Arithmetic service tests", () => {

    it("it should return 6 by adding 3 and 3", () => {
        expect(add(3, 3)).toBe(6);
    });

    it("it should return 9 by multiplying 3 and 3", () => {
        expect(multiply(3, 3)).toBe(9);
    });

    it("it should return 1 by dividing 3 and 3", () => {
        expect(divide(3, 3)).toBe(1);
    });

    it("it should return 0 by subtracting 3 and 3", () => {
        expect(subtract(3, 3)).toBe(0);
    });

    it("it should return have x as 1, symbol as + and y as 2: 1+2", () => {
        const {x, symbol, y} = deconstructEquation("1+2"); // Test shows the need for trimming whitespaces
        // As is the FE just forces no white spaces to be present
        expect(x).toBe("1");
        expect(symbol).toBe("+");
        expect(y).toBe("2");
    });

    it("it should return 3: 1+2", () => {
        expect(chooseArithmeticFunction("1+2")).toBe(3);
    });

    it("it should return 2: 2÷1", () => {
        expect(chooseArithmeticFunction("2÷1")).toBe(2);
    });

    it("it should return 4: 2x2", () => {
        expect(chooseArithmeticFunction("2x2")).toBe(4);
    });

    it("it should return 0: 2-2", () => {
        expect(chooseArithmeticFunction("2-2")).toBe(0);
    });
})
