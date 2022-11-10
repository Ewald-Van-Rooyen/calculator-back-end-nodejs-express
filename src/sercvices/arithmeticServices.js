function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function chooseArithmeticFunction(equationString) {
    let {x, symbol, y} = deconstructEquation(equationString);
    x = parseInt(x, 10);
    y = parseInt(y, 10);

    switch (symbol) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "x":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
        default:
            return equationString;
    }
}

function deconstructEquation(equationString) {
    const [x, symbol, y] = equationString.match(/[^\d()]+|[\d.]+/g);
    return {symbol, x, y}
}

module.exports = {chooseArithmeticFunction, add, subtract, multiply, divide, deconstructEquation};
