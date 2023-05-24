const express = require("express")
const route = express.Router()
const auth = require("../middlewares/Auth-premission")
const  User = require("../models/UserModel")

route.put("/:id", auth, async(req, res)=>{
    try{
  let user =await  User.findByIdAndUpdate(req.params.id, {isAdmin:true})
   res.json({
    "message": "user is Admin now",
    "name": user.name,
    "token":user.token,
    "adminRole": user.isAdmin,
    "id": user.id,
   })}catch(err){ console.log(err)}
        // ,function(err, data){
        //     if(!err){
        //         //check if update happend or not
        //         if(data) res.send("User Role is set to admin")
        //         else res.send("User Not Found")
        //     }
        //     else{
        //         console.log(err)
        //         res.status(500).send("Internal server error")
        //     }
        // })
})

module.exports = route

