const express = require("express")
const mongoose = require("mongoose");

const User = require("../models/userModel")

const router = express.Router();

router.get("/",async (req,res)=>{

    const users = await User.find()
    res.status(200).send(users)
})

router.post("/", async (req,res)=>{
    console.log(req.body)

    const user = await User.create(req.body)
    res.status(200).send(user)
})

router.delete("/:id",async (req,res)=>{
    var id = new mongoose.Types.ObjectId(req.params)
    const user = await User.findByIdAndDelete({_id:id})
    
    res.send(user)
})
router.put("/:id",async (req,res)=>{
    var id = new mongoose.Types.ObjectId(req.params)
    data = req.body
    const user = await User.findByIdAndUpdate({_id:id},
        data,{new:true}
    )
    
    res.send(user)
})


module.exports = router;