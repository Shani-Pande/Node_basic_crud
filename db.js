const mongoose= require("mongoose")
require("dotenv").config()
// const mongoUrl= "mongodb://127.0.0.1:27017/Hotels"
const mongoUrl= process.env.MONGO_URL
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("conneted");
})
db.on("error",()=>{
    console.log("having some error");
})
db.on("disconnected",()=>{
    console.log("mongodb disconneted");
})
module.exports= db