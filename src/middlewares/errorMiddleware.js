const { sendErrorResponse } = require('../helpers/responseHelper');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

const { NotFound } = require('../errors');

const pathNotFound = (req, res, next) => {
    return next(new NotFound('Path not found.'));
};

const errorHandler = (error, req, res, next) => {
    const { status, message } = error;

    if (error.customError) {
        return sendErrorResponse(res, {
            status,
            message,
        });
    }

    return sendErrorResponse(res, {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    });
};

module.exports = {
    pathNotFound,
    errorHandler,
};
