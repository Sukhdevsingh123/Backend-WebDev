const mongoose = require('mongoose');
const chat=require("./models/chat")

main().then((res)=>{
    console.log("connection succesful");
  }).catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    let result= await chat.insertMany(allchats)
    console.log(result)
  }

  let allchats=[
    {
    from:"banke",
    to:"sahdev",
    msg:"send me your photo",
    Created_at:new Date(),
  },

  {
    from:"rajni",
    to:"soumya",
    msg:"send me your photo and mobile no",
    Created_at:new Date(),
  },

  {
    from:"mohit",
    to:"rohit",
    msg:"how are you",
    Created_at:new Date(),
  },
  {
    from:"mahi",
    to:"muskan",
    msg:"are you going today coelege",
    Created_at:new Date(),
  },
  {
    from:"chanchal",
    to:"sukdev",
    msg:"I love you",
    Created_at:new Date(),
  },

]

// const mongoose = require('mongoose');
// const chat = require("./models/chat");

// main().then(() => {
//     console.log("Connection successful");
// }).catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
//     console.log("Connected to MongoDB");
  
//     let allchats = [
//         {
//             from: "banke",
//             to: "sahdev",
//             msg: "send me your photo",
//             Created_at: new Date(),
//         },
//         {
//             from: "rajni",
//             to: "soumya",
//             msg: "send me your photo and mobile no",
//             Created_at: new Date(),
//         },
//         {
//             from: "mohit",
//             to: "rohit",
//             msg: "how are you",
//             Created_at: new Date(),
//         },
//     ];

//     try {
//         const result = await chat.insertMany(allchats);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
