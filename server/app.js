require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const routes = require("./routes")
const errorHandler = require("./middlewares/errorHandler.js")

app.use(express.urlencoded({extended:false}))
app.use(routes)


app.use(errorHandler)
app.listen(port,()=>{
  console.log(`App listening to port ${port}`)
})
