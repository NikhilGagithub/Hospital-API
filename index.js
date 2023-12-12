const express = require('express');

const bodyParser = require("body-parser")
const router = require("./routes/router");
const db =require('./config/dataBase')

const passport = require("passport")
const passportStratergy = require('./config/passport')
const app =express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port=8000;
app.use(router);
app.listen(port,(err)=>{
    if(err){
        console.log(`server is giving an err: ${err}`)
    }else{
        console.log("server is succesfully up and riuning");
    }
})