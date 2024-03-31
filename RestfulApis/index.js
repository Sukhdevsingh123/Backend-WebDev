const express=require("express");
const app=express();
const port=5000;
const path=require('path')

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const post=[
    {
        username:"Sukhdev Singh",
        Password:96664
    },
    {
        username:"Rahul Singh",
        Password:95674
    },
    {
        username:"Sachin Singh",
        Password:22133
    }
]

app.get('/posts',(req,res)=>{
    // res.send("server working well");
    res.render("index.ejs",{post})
});
app.get("/posts/new",(req,res)=>{
    res.render("form.ejs") //render from.ejs
});
app.post('/posts',(req,res)=>{
    let{username,Password}=req.body;
    post.push({username,Password});
    res.redirect("/posts")
res.send("post request working")
    // console.log(username);

});

app.listen(port,()=>{
    console.log(`port is listen on ${port}`)
});