const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');  
const bodyParser = require('body-parser');
const routes = require('../routes');
//get app                                                                                                                   
const app = express();

//logger
if(config.env === 'development'){
    console.log(`config env ${config.env}`);
    app.use(logger());
}

//get dist folder
const distFolder = path.join(__dirname,'../../dist');

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
app.get('*',(req,res)=>{
    res.sendFile(path.join(distFolder,'index.html'));
})


module.exports = app;