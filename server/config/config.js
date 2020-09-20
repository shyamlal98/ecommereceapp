require('dotenv').config();
// console.log(envVars.PORT);
module.exports ={
    port : process.env.PORT || 4530,
    env  : process.env.NODE_ENV,
    mongo:{
        uri:`mongodb://localhost:27017/emart`,
        port:27017,
        isDebug:true
    }
};

