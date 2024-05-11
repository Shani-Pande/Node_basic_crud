const express = require("express")
const app = express()
const db = require("./db")
const bodyParser = require("body-parser")
const personRoutes= require("./routes/personRoutes")
const menuRoutes= require("./routes/menuRoutes")
app.use(bodyParser.json())

// add new request
app.use(personRoutes)
app.use(menuRoutes)
app.listen(3000, () => {
   console.log("server is running on port number 3000");
})