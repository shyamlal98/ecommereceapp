const express = require('express');
const authRoute = require('./auth_route');

const router = express.Router();

//localhost:4512:/api/auth
router.use('/auth',authRoute);

module.exports = router;