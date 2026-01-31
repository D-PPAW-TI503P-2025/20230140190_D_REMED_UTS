const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// register user baru
router.post('/register', authController.register);

// login user / admin
router.post('/login', authController.login);

module.exports = router;
