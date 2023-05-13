const User = require("../models/UserModel")
const config = require('config')
const bcrypt = require('bcrypt')

const AddNew = async (req, res)=>{
    try{
        let user = await User.findOne({email: req.body.email})
        if(user){ 
            return res.status(400).json({
                "message": "User Already Exists"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)      
        user =  new User({ 
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
         })
        await user.save()
        if(!config.get("jwtsec")){
            console.log("jwtsec is not defined")
            res.status(500).send("Internal Server Error")
        }
        let token =  user.AuthToken()
        res.header("x-auth-token", token) 
        res.status(200).json({
        "message" :" User is registred ",
        "token": token,
         "id": user._id,
         "IsAdmin": user.isAdmin
    })}
    catch(err){ console.log(err)}
}

const getAll =async (req, res)=>{
    try{
       let user = await User.find().select({name:1, _id:0})
       return res.status(200).json({user})
}
catch(err){ console.log(err)}
}
const GetById = async(req, res)=>{
    try{
        let user = await User.findById(req.params.id)
        if(!user) return res.status(400).json({"Status Code": 400,"message": "Not Found!", "id": req.params.id})
        if(!config.get("jwtsec")){
            console.log("jwtsec is not defined")
            return res.status(500).send("Internal Server Error")}
       const token = await user.AuthToken()
        res.header("x-auth-token", token)
       return res.status(200).json({
        "message": "user Founded",
        "token":token,
        "name": user.name,
         "id": user._id, 
         "IsAdmin": user.isAdmin})
}
catch(err){ console.log(err)}}

const DeleteById =async (req, res)=>{
    try{let user =await  User.findByIdAndRemove(req.params.id)
    if(!user) return res.status(400).json({"message": "Not Found!", "id": req.params.id})
    return res.status(200).json({"message": `${user.name} deleted` })
}catch(err){ console.log(err)}}

const updateById =async (req, res)=>{
   try{ const user = await User.findByIdAndUpdate(req.params.id, req.body)
    if(!user) return res.status(400).json({"message": "Not Found!", "id": req.params.id})
    let token =  await user.AuthToken()
    res.header("x-auth-token", token) 
    return res.status(200).json({"message": "information updated","token":token, "id": user._id})
}catch(err){ console.log(err)}}
module.exports = {AddNew, getAll, GetById, DeleteById, updateById}