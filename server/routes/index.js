const routes = require("express").Router()
const userRoutes = require("./userRoutes.js")

routes.use("/users",userRoutes)

module.exports = routes
