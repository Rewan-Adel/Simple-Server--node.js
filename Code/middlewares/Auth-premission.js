const jwt  = require("jsonwebtoken")
const config = require("config")
module.exports = (req, res, nxt)=>{
    const token = req.header("x-auth-token")
    if(!token)  res.status(401).json({
        "message":"jwt not token ",
        "status code": 400
    })
    
    try{
    const decodedPayload = jwt.verify(token, config.get('jwtsec'))
    if(!decodedPayload.adminRole){
        return res.status(401).json({
            "message":"Unauthorized User",
            "status code": 401
        })
    }
    nxt()
}catch(err){console.log(err)}
}