const userRoutes = require("express").Router()
const UserController = require("../controllers/usercontroller.js")

userRoutes.post("/register",UserController.register)
userRoutes.post("/login",UserController.login)

module.exports = userRoutes
