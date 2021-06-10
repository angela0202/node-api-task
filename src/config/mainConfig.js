const mainConfig = {
    validationOptions: {
        allowUnknown: true,
    },
    jwt: {
        options: {
            expiresIn: 360000000,
        },
    },
};

module.exports = mainConfig;
