const CustomError = require('./customError');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

class Forbidden extends CustomError {
    constructor (message) {
        const status = StatusCodes.FORBIDDEN;

        super({
            status,
            message: message || getReasonPhrase(status),
        });
    }
}

module.exports = Forbidden;
