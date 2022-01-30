require("dotenv").config();
require("./api/data/db");
const express = require("express");
const movieRouter = require("./routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Access-Control-Allow-Header',
            'Content-Type,X-Requested-With,cache-control,pragma');
    next();
})
app.use('/api',movieRouter);
const server = app.listen(process.env.PORT,function(){
    console.log(process.env.SERVER_MSG,server.address().port);
})