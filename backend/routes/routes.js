const { application } = require("express");
const express = require("express");
const router = express.Router();
const signup = require("../models/users");
let value=0;
var user

//  function run(username, password) {
//   try {
//     user = signup.find({ username:username});
//     console.log(user)
// }
// catch (e) {
//     console.log(e.message);
// }
//     if(user.username===username && user.password===password)
//         return 1;
//     else if(user.username==username && user.password!=password)
//         console.log("invalid password")
//     else if(user.username!=username)
//         console.log("user not found")
// }

router.post("/signup", (req, res) => {
  const signedUpUser = new signup({
    username: req.body.username,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
  });
  signedUpUser
    .save()
    .then((data) => res.json(data))
    // .then(data=>console.log(data))
    .catch((err) => console.log(err));
  console.log(signedUpUser);
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // console.log(username,password)
  try {
        user =  await signup.find({username:username});
          if(user.length==0)
              res.send({message:"false"})
          else if(user[0].password==password)
              // res.send(user)
              res.send({message:"true"})
              // console.log(user) 
          else
          res.send({message:"false"})
    }
    catch (e) {
        console.log(e.message);
    }
})

router.get("/login",(req,res)=>{
  res.send("login page")
})
//   console.log(username,password)


  // run(username, password,value).then()
  // console.log(user)

//   if(res==1)
//     res.send("welcome")
//     else if(res==2)
//     res.send("incorrect password")
//     else if(res==3)
//     res.send("user not found")
// });


 



module.exports = router;
