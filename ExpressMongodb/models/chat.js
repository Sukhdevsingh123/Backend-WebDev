const mongoose=require("mongoose");

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
    },
    msg:{
        type:String,
        maxLength:50,
    },
    Created_at:{
        type:Date,
        required:true,
    },
});

const chat=mongoose.model("chat",chatSchema)
module.exports= chat;