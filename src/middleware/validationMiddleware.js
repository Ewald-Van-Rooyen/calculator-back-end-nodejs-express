const {validationResult, body} = require("express-validator");

const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({
            errors: errors.array()
        });
    };
};

exports.validateParams = validate([
    body('x', "x does not exist").exists().isInt(),
    body('y', 'y does not exist').exists().isInt()
]);


