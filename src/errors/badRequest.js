const CustomError = require('./customError');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

class BadRequest extends CustomError {
    constructor (message) {
        const status = StatusCodes.BAD_REQUEST;

        super({
            status,
            message: message || getReasonPhrase(status),
        });
    }
}

module.exports = BadRequest;
