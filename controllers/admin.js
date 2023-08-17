const Admin=require('../model/admin')


exports.admin_create=async(req,res)=>{
    try {
        const {email,password}=req.body
        const admin_data=await Admin.create({email,password})
        res.status(200).json({success:true,
       admin_data })
    } catch (error) {
        console.log(error=error)
        res.status(500).json({success:false,error})
    }
}


exports.admin_login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const login_admin=await Admin.find({})
        res.status(200).json({success:true,
       login_admin })
    } catch (error) {
        console.log(error=error)
        res.status(500).json({success:false,error})
    }
}


