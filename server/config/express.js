const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');  
const bodyParser = require('body-parser');
const routes = require('../routes');
const httpError = require('http-errors');
//get app                                                                                                                   
const app = express();

//logger
if(config.env === 'development'){
    console.log(`config env ${config.env}`);
    app.use(logger());
}

//get dist folder
const distFolder = path.join(__dirname,'../../dist/ecommerceapp');

// use dist as hosting dir by express
app.use(express.static(distFolder));

//parsing from api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//secure apps http
app.use(helmet());

//allow cors
app.use(cors());

//api router
app.use('/api',routes);

//serve the index.html
app.get('*',(req,res)=>res.sendFile(path.join(distFolder,'index.html')));

// catch 404 error and forward to error hand
app.use((req,res,next)=>{
  const error = new HttpError(404);
  return next(error);
});

//eror handler, stackc trace
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.messages
    });
    return next(err);
  });
module.exports = app;
