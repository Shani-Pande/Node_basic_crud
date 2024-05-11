const express = require("express")
const app = express()
const db = require("./db")
const bodyParser = require("body-parser")
const personRoutes= require("./routes/personRoutes")
const menuRoutes= require("./routes/menuRoutes")
app.use(bodyParser.json())
require("dotenv").config()

// add new request
app.use(personRoutes)
app.use(menuRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
   console.log("server is running on port number 3000");
})