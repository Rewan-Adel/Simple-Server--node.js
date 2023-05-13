const validator = require("../util/Auth-validator")
module.exports = (req, res, nxt)=>{
    let valid = validator(req.body)
    if(valid){ 
        req.valid= 1
        nxt() 
    }
    else res.status(400).json({ "message": "Invalid data" , "status code": 400})
}