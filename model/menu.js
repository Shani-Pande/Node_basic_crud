const mongoose = require("mongoose")



const menuSchema= new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number,
        default: 34
    },
    taste:{
        type: String,
        enum:["sweet","spicy","sour"]
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:String,
        enum:["chicken_wings","spices","sauce"]
    },
    num_sales:{
        type:Number,
        default:0
    }

})

const menuItem = mongoose.model("MenuItem",menuSchema)
module.exports= menuItem