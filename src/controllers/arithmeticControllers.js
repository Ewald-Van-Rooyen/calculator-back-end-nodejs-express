const {chooseArithmeticFunction} = require("../sercvices/arithmeticServices");

function calculate(request, response) {
    const body = request.body;

    if (!body) {
        return response.status(400).send("No request body present");
    }

    if (!body.calculation) {
        return response.status(400).send("No request body calculation value present");
    }

    const equation = chooseArithmeticFunction(body.calculation);
    response.send(equation+"");
}

module.exports = {calculate};

