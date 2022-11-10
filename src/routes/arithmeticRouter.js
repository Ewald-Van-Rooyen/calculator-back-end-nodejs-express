const arithmeticRouter = require("express").Router();

const {calculate} = require("../controllers/arithmeticControllers")

arithmeticRouter.post("/calculate", calculate);

module.exports = arithmeticRouter;
