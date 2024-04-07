const mongoose = require('mongoose');

main().then((res)=>console.log(res)).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({   //make schema
    name:String,
    age:Number,
    email:String,

});
const user=mongoose.model("user",userSchema);   //make model of userSchema

const user1=new user({
    name:"banke",age:20,email:"banke@gmail.com"
});
const user2=new user({
    name:"shyam",age:23,email:"shyam123@gmail.com"
});
user1.save();
user2.save();
user.find().then((data)=>{
    console.log(data);
}).catch(err=>console.log(err));
