const mongoose= require("mongoose")
const mongoUrl= "mongodb://127.0.0.1:27017/Hotels"

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