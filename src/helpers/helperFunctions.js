const bcrypt = require('bcrypt');

const salt = 10;

module.exports.hashPassword = async (password) => {
    return bcrypt.hash(password, salt);
};

module.exports.comparePasswords = async (plainPassword, hash) => {
    return bcrypt.compare(plainPassword, hash);
};
