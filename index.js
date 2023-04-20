const express = require('express');
const app = express();
const port = process.env. PORT = 8080;
require('./database/connection')



app.listen(port,()=>{
console.log(`app is listening at port ${port}`)
})