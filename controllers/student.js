const Student=require("../model/student")

exports.Student_create=async(req,res)=>{
try {
    const{name,age,mobile,study,id}=req.body
const new_data= await Student.create({name,age,mobile,study,id})
res.status(200).json({
    success:true,
    new_data
})
} catch (error) {
    console.log(error=error)
    res.status(500).json({success:false,error})
}

}


exports.all_studentdata=async(req,res)=>{
    try {
        
        const student_data=await Student.find()
        res.status(200).json({success:true, student_data})
    } catch (error) {
       console.log(error=error)
       res.status(500).json({success:false,error}) 
    }
}