const jwt = require('jsonwebtoken');
const mainConfig = require('../config/mainConfig');

const options = mainConfig.jwt.options;
const secret = process.env.SECRET;

const getAuthToken = async (data) => {
    return jwt.sign(data, secret, options);
};

const decodeAuthToken = async (token) => {
    return jwt.verify(token, secret)
};

module.exports = {
    getAuthToken,
    decodeAuthToken,
};
