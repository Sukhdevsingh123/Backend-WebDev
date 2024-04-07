const express=require("express");
const mongoose = require('mongoose');
const chat=require("./models/chat")
const app=express();
const port=8080;

const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");

app.use(express.static(path.join(__dirname,"public"))); //serve css and js files from public folder
main().then(() => {
  console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {  //connection for
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  console.log("Connected to MongoDB");
}


app.get("/",(req,res)=>{  //home path
  res.send("workinf fine !!!")
})

app.get("/chats",async(req,res)=>{ //the data comes from db so it can take some time then we make it async function
  const allchats=await chat.find();  //it wait to response that are comes from db
  console.log("allchats",allchats)
  res.render("allchats.ejs",{allchats});

})

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
})