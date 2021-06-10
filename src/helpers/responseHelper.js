const { StatusCodes, getReasonPhrase } = require('http-status-codes');

const sendErrorResponse = (res, data) => {
    return res.status(data.status).json({
        ...data,
    });
};

const sendSuccessResponse = (res, data, total) => {
    return res.status(data.status || StatusCodes.OK).json({
        data,
        message: getReasonPhrase(data.status || StatusCodes.OK),
        ...(total ? { total } : {}),
    });
};

module.exports = {
    sendErrorResponse,
    sendSuccessResponse,
};
