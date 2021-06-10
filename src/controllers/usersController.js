const { User } = require('../models');

const { Forbidden } = require('../errors');
const { sendSuccessResponse } = require('../helpers/responseHelper');

const getUserData = async (req, res, next) => {
    try {
        const { params: { userId }, userData } = req;

        if (Number(userId) !== userData.id) {
            return next(new Forbidden());
        }

        const user = await User.scope('withoutPassword').findOne({
            where: {
                id: userId
            },
        });

        return sendSuccessResponse(res, user);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getUserData,
};
