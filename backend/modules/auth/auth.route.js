const express = require('express');

const {registerUser, loginUser, getUserProfile} = require('./auth.controller.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:username', getUserProfile);

module.exports = router;