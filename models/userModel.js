
const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    name : {type : String, },
    age : { type: Number, }
})


const User = new mongoose.model("User", userSchema)

