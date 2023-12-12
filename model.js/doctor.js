const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true,"Please Enter your name"]
        },
        password : {
            type : String,
            required : [true,"Please Entre Your Password"],
            miniLength : [6,"Password should be greater than 6 characters"]
        },});

const Doctor = new mongoose.model("Doctor",doctorSchema);
module.exports = Doctor;