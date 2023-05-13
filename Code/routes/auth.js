const express = require("express")
const route = express.Router()
const User = require('../models/UserModel')
const validator = require('../middlewares/Auth-validatorMW')
const bcrypt = require("bcrypt")
const config = require("config")
route.post("/", validator, async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
    if(!user){return res.status(400).json({"message": "Invalid email or password"})}
    
    validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass){return res.status(400).json({"message": "Invalid email or password"})}

    if(!config.get("jwtsec")) res.status(500).json({'message':"internal server error"})
    let token =await user.AuthToken()
    res.header("x-auth-token", token)
    return res.status(200).json({
        "message": " Logged in Successfully",
        "token": token,
        "id": user._id
    })}
    catch(err){
        console.log(err)
    }
})

module.exports = route
