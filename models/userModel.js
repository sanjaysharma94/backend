
const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
   
       
        firstname:{type : String, },
        lastname: {type : String, },
        photo:{type : String, },
        age: {type : Number, },
        gender: {type : String, },
        phone: {type : Number, },
    
})


const User = new mongoose.model("User", userSchema)

module.exports = User;
