const User = require('../models/user.model');
const bcrypt = require('bcrypt');
async function insert(user)
{
    ///mongodb call to save user data in db
    console.log(`encrypting user password of ${user}`)
    user.hashedPassword = bcrypt.hashSync(user.password,10);
    delete user.password;
    console.log(`saving user to db ${user}`);
    return await new User(user).save();
}


async function getUSerByEmailIdAndPassword(email, password){
    let user = await User.findOne({email});
    if(isUserValid(user,password,user.hashedPassword)){
      user = user.toObject();
      delete user.hashedPassword;
      return user;
    }else{
        return null;
    }
}

function isUserValid(user,password,hashedPassword){
    return user && bcrypt.compareSync(password,hashedPassword);
}

module.exports = {
    getUSerByEmailIdAndPassword,
    insert
}