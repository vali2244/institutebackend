const  mongoose  = require("mongoose");


const student_schma=new mongoose.Schema({
name:String,
study:Number,
age:Number,
mobile:Number,
id:Number



})
module.exports = mongoose.model('Student',student_schma)