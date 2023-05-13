const mongoose = require("mongoose");
const valid = require("validator")
const jwt = require("jsonwebtoken")
const config = require('config')
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        require: true
    }, 
    email:{
        type : String,
        unique : true,
        validate:{
            validator:(val)=>{ return valid.isEmail(val)}
        },
        message : "{VALUE} is not Valid Email",
        require: true
    },
    password:{
        type : String,
        require: true
    },
    isAdmin: {type: Boolean}
})

userSchema.methods.AuthToken = function(){
    const token = jwt.sign({
        useId: this._id,
        adminRole: this.isAdmin
    }, config.get("jwtsec"))
    return token;
}

module.exports = mongoose.model("users", userSchema)