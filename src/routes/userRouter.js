const express = require('express');

const { getUserData } = require('../controllers/usersController');

const router = express.Router();


router.get('/:userId', getUserData);

module.exports = router;
