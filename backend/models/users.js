const mongoose = require("mongoose");
const schema=mongoose.Schema;
const users=new schema({
    email:{
        type: String,
      },
    username:{
      type:String,
    },
    password:{
      type: String,
    },
    confirm_password:{
        type: String,
    }
})



module.exports = mongoose.model("users1",users);













