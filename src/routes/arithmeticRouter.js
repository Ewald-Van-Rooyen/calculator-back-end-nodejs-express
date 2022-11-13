const arithmeticRouter = require("express").Router();
const {validateParams} = require("../middleware/validationMiddleware");

const {add, subtract, divide, multiply, modulo} = require("../controllers/arithmeticControllers")
arithmeticRouter.post("/add", validateParams, add);
arithmeticRouter.post("/subtract", validateParams, subtract);
arithmeticRouter.post("/divide", validateParams, divide);
arithmeticRouter.post("/multiply", validateParams, multiply);
arithmeticRouter.post("/modulo", validateParams, modulo);

module.exports = arithmeticRouter;
