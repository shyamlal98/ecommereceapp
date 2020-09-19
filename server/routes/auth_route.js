const express = require('express');
const userController = require('../controllers/user-controllers.js');
const asyncHandler = require('express-async-handler');
const router = express.Router();


//localhost:4512:/api/auth/register
router.post('/register',asyncHandler(insert));
async function insert(req,res,next){
    const user = req.body;
    console.log('user registering',user);
    const savedUser = await userController.insert(user);
    res.json(savedUser);

}

module.exports = router;