const express = require('express');
const router = express.Router();

const { getUserData } = require('../controllers/usersController');

router.get('/:userId', getUserData);

module.exports = router;
