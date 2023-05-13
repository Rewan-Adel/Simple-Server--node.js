const validator = require("../util/User-Validator")
module.exports = (req, res, nxt)=>{
    let valid = validator(req.body)
    if(valid){
        req.valid = 1;
        nxt();
    }else{
    res.status(403).json({
        "message": "Invalid Data"
    })}
        
    
}