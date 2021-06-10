const CustomError = require('./customError');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

class Conflict extends CustomError {
    constructor (message) {
        const status = StatusCodes.CONFLICT;

        super({
            status,
            message: message || getReasonPhrase(status),
        });
    }
}

module.exports = Conflict;
