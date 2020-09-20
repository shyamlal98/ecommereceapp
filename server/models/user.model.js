const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true,

    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/],
        unique:true
    },
    hashedPassword:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    roles:[{
        type:String
    }],
    versionKey:false

});

module.exports = mongoose.model('User',UserSchema);