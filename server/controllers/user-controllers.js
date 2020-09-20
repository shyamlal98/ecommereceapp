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
module.exports = {
    insert
}