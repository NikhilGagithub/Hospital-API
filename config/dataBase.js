const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.error("error",console.error.bind(console,"error in connecting with mongodb"));

db.once('open',()=>{
    console.log("succesfully conecting with mongoDB ")
})
module.exports=db;
