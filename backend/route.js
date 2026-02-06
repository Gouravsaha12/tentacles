const express = require('express');

const authRoutes = require('./modules/auth/auth.route.js');

const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;