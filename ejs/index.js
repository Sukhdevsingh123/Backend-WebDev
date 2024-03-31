const express=require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/rolldice",(req,res)=>{
    let diceValue=Math.floor(Math.random()*6+1);
    res.render("rolldice.ejs",{num:diceValue});
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    // res.render("instagram.ejs",{username})
    // console.log(username)
    let instaData=require("./data.json");
    let data=instaData[username];
    // console.log(instaData)
    res.render("instagram.ejs",{data})

})

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
})