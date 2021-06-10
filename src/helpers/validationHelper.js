const { validationOptions } = require('../config/mainConfig');

const { BadRequest } = require('../errors');

const validate = (schema, req, next) => {
    const { error } = schema.validate(req.body, validationOptions);

    if (error) {
        const details = error.details.reduce((acc, detail) => `${acc} ${detail.message}`, '');
        return next(new BadRequest(details));
    }

    return next();
};

module.exports = validate;
