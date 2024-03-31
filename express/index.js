const express=require("express");
const app=express();
console.dir(app);

let port=3000;

app.listen(port,()=>{
    console.dir(`app is listen on port ${port}`);

});

// app.use((req,res) =>{
// console.log("request raecieved");
// res.send("first response");
// let codeHtml="<h1>Sukhdev Singh</h1><ul><li>baca</li>";
// res.send(codeHtml);
// res.send({
//     name:"sukhdev",
//     age:20
// })
// });


app.get("/",(req,res)=>{
    res.send("you are hor page")
})

app.get("/contact",(req,res)=>{
    res.send("you are contact page")
})

app.get("/about",(req,res)=>{
    res.send("you are aboutsjjj page")
})
