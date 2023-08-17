const app=require('./app')
const Port=2222;
const {connectdb} = require('./config/database')

connectdb()

app.listen(Port,()=>console.log(`server is running at ${Port}`))