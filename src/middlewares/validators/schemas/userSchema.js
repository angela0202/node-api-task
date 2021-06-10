const Joi = require('joi');

const userRegisterSchema = Joi.object({
    first_name: Joi.string().trim().min(2).max(100).required(),
    last_name: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required(),
    repeat_password: Joi.ref('password'),
});

const userLoginSchema = Joi.object({
    body: Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required(),
    }),
});

module.exports = {
    userLoginSchema,
    userRegisterSchema,
};
