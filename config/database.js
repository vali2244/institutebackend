const mongoose=require('mongoose')

// const MONGO_URI="mongodb://127.0.0.1:27017/test"
const db="mongodb+srv://syedvali221:Babavali221@cluster0.wtcgclm.mongodb.net/?retryWrites=true&w=majority"
exports.connectdb=()=>{
mongoose.connect(db)
.then((res)=>console.log(`mongo db is connected at ${res.connection.host}`))
.catch((err)=>console.log(err))
}


