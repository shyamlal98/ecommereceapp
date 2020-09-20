const express = require('express');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const userController = require('../controllers/user-controllers.js');
const router = express.Router();
// const User = require('../models/user.model');
// const {getUSerByEmailIdAndPassword} = require('../controllers/user-controllers');



//localhost:4512:/api/auth/register
router.post('/register',asyncHandler(insert));
async function insert(req,res,next){
    const user = req.body;
    console.log('user registering',user);
    const savedUser = await userController.insert(user);
    res.json(savedUser);

}

router.post('/login',asyncHandler(getUSerByEmailIdAndPassword));

async function getUSerByEmailIdAndPassword(req,res,next){
      const user = req.body;
      console.log(`serching for user ${user}`);

      const savedUser = await userController.getUSerByEmailIdAndPassword(user.email,user.password);
      console.log(`user found with details`,savedUser);
      res.json(savedUser);
}

module.exports = router;