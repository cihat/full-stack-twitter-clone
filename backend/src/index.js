const express = require("express")
const bodyParser = require("body-parser")
const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")
const cors = require("cors")
require("./mongo-connection")

const app = express()
app.use(bodyParser.json())
app.set("views", __dirname + "/views")
app.use(cors())

app.set("view engine", "pug")

app.use("/", indexRouter)
app.use("/users", usersRouter)

module.exports = app
