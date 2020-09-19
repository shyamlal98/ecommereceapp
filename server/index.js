const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

const destinationDir = path.join(__dirname,'../dist/ecommerceapp');

// hosting from dist folder
app.use(express.static(destinationDir));

console.log(`Express hosting from ${destinationDir}`);

//serving index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(destinationDir),'index.html');
});

console.log(`serving index.html`);

app.listen(PORT,(err)=>{
    if(!err) console.log(`Server is running at port ${PORT}`);
});