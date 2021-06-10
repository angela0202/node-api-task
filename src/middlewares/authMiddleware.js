const { Unauthorized } = require('../errors');

const { decodeAuthToken } = require('../helpers/jwtHelper');

const authMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [bearer, bearerToken] = (authorization || '').split(' ');

        if (!bearer || !bearerToken) {
            return next(new Unauthorized());
        }

        req.userData = await decodeAuthToken(bearerToken);
        return next();
    } catch (e) {
        next(new Unauthorized(e.message));
    }
};

module.exports = authMiddleware;
