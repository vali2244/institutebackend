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
        const admin=await  Admin.findOne({email})
        console.log(admin)
        if(admin){
            const verify_admin=await Admin.findOne({email,password})
            console.log(verify_admin)
            if(verify_admin){
                res.status(200).json({success:true,
                verify_admin})
            }

            else{
                res.status(201).json({
                    success:false,
                    message:"wroang credential"
                })
            }
        }
        else{
            res.status(201).json({
                success:false,
                message:"email is not registred"

            })
        }



    } catch (error) {
       
        res.status(500).json({success:false,error})
    }
}


