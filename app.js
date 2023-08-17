const express=require('express')
const app=express()

const cors=require('cors')

const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())



const student=require( "./routes/student")
app.use("/api/v2",student)

const admin=require("./routes/admin")
app.use("/api/v2",admin)

module.exports=app