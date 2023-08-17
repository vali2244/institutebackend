const express=require("express")

const { admin_create, admin_login } = require("../controllers/admin")


const router=express.Router()


router.route("/admin/create").post(admin_create)
router.route("/admin/login").post(admin_login)

module.exports=router