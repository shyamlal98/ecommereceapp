
users = [];
async function insert(user)
{
    ///mongodb call to save user data in db
    console.log('serving to db');
    users.push(user);
    return user;
}

module.exports = {
    insert
}