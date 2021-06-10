const { User } = require('../models');
const { Conflict, NotFound } = require('../errors');

const { hashPassword, comparePasswords } = require('../helpers/helperFunctions');
const { sendSuccessResponse } = require('../helpers/responseHelper');
const { getAuthToken } = require('../helpers/jwtHelper');

const registerUser = async (req, res, next) => {
    const { email, password, first_name, last_name } = req.body;

    const user = await User.findOne({
        where: {
            email,
        },
    });

    if (user) {
        return next(new Conflict('User already exists.'));
    }

    const hashedPassword = await hashPassword(password);

    try {
        await User.create({
            email,
            last_name,
            first_name,
            password: hashedPassword,
            last_login: Date.now(),
            active: true,
        });

        return sendSuccessResponse(res, {
            email,
            last_name,
            first_name,
        });
    } catch (e) {
        next(e);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return next(new NotFound('User does not exist.'));
        }

        const match = await comparePasswords(password, user.password);

        if (!match) {
            return next(new NotFound('User does not exist.'));
        }

        const token = await getAuthToken({ id: user.id, email  });

        return sendSuccessResponse(res, {
            id: user.id,
            email,
            token,
        });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    loginUser,
    registerUser,
};
