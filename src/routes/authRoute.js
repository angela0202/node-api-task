const express = require('express');

const router = express.Router();

const { UserValidator: { validateUserLogin, validateUserRegister } } = require('../middlewares');

const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', validateUserRegister, registerUser);
router.post('/login', validateUserLogin, loginUser);

module.exports = router;
