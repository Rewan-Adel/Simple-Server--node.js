const express = require("express")
const route = express.Router()
const validator = require("../middlewares/User-ValidatorMW")
const UserController = require("../controllers/UserController")
const auth = require("../middlewares/Auth-premission")

route.get("/", auth, UserController.getAll)
route.get("/:id", auth, UserController.GetById)
route.delete("/:id", auth, UserController.DeleteById)

route.post("/", validator, UserController.AddNew)
route.patch("/:id", UserController.updateById)

module.exports = route