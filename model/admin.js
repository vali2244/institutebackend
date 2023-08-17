const mongoose=require("mongoose")


const admin_scham=new mongoose.Schema({
email:String,
password:String,


})


module.exports=mongoose.model(`Admin`,admin_scham)