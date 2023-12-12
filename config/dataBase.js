const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/HospitalAPI");

const db = mongoose.connection;

db.error("error",console.error.bind(console,"error in connecting with mongodb"));

db.once('open',()=>{
    console.log("succesfully conecting with mongoDB ")
})
module.exports=db;