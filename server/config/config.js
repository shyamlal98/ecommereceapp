require('dotenv').config({path:''});
// console.log(envVars.PORT);
module.exports ={
    port : process.env.PORT || 4530,
    env  : process.env.NODE_ENV
}