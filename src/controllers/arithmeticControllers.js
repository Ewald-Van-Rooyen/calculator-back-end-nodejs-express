const {addition, subtraction, multiplication, division, modulation} = require("../sercvices/arithmeticServices");

function add(request, response) {
    const {x, y} = request.body;
    const solution = addition(x, y);
    response.json({solution});
}

function subtract(request, response) {
    const {x, y} = request.body;
    const solution = subtraction(x, y);
    response.json({solution});
}

function multiply(request, response) {
    const {x, y} = request.body;
    const solution = multiplication(x, y);
    response.json({solution});
}

function divide(request, response) {
    const {x, y} = request.body;
    const solution = division(x, y);
    response.json({solution});
}

function modulo(request, response) {
    const {x, y} = request.body;
    const solution = modulation(x, y);
    response.send({solution});
}

module.exports = {add, subtract, multiply, divide, modulo};

