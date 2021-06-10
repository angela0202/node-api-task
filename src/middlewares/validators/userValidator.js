const { UserSchema } = require('./schemas');
const validate = require('../../helpers/validationHelper');

const validateUserRegister = (req, res, next) => {
    return validate(UserSchema.userRegisterSchema, req, next);
};

const validateUserLogin = (req, res, next) => {
    return validate(UserSchema.userLoginSchema, req, next);
};

module.exports = {
    validateUserLogin,
    validateUserRegister,
};
