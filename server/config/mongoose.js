const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mogoose-es6-rest-api:index');
const config = require('../config/config');
const mongoURI = config.mongo.uri;
mongoose.connect(mongoURI,{useNewUrlParser:true});

const db = mongoose.connection;

db.once('open',()=>{
    console.log("connected to data base : "+ mongoURI);
})

db.on('error',()=>{
     throw new Error(`unable to connect database ${mongoURI}`);
});


if(config.mongo.isDebug){
    mongoose.set('debug',(collection,method,query,doc)=>{
        debug(`${collection}.${method}`,util.inspect(query,false,20),doc);
    });
}

module.exports = db;