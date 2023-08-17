const express=require("express")
const { Student_create, all_studentdata } = require("../controllers/student")


const router=express.Router()


router.route("/student/create").post(Student_create)
router.route("/all/studentdata").get(all_studentdata)

module.exports=router