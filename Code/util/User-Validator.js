const Ajv = require("ajv")
const ajv = new Ajv()
const Schema = {
    type: "object",
    properties:{
        name:     {"type": "string"},
        email:    {"type": "string"},
        password: {"type": "string"},
        isadmin:  {"type": "boolean"}
    },
    required: ["name", "email","password"]
} 
module.exports = ajv.compile(Schema)