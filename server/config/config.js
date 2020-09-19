require('dotenv').config();
const envVars = process.env;
// console.log(envVars.PORT);
module.exports ={
    port : envVars.PORT || 4530,
    env  : envVars.NODE_ENV
}