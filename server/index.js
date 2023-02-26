const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const routing = require("./routing")
const middleware = require("./routing/middleware")

const app = express()
const PORT = 5000

app.use(express.static(path.join(__dirname, "../client"))) //Connects client and server

app.use(bodyParser.urlencoded({ extended: true })) //allows user to do requests

app.use("/api", middleware, routing)

app.listen(PORT, () => {
	console.log(`Backend is listening on port: ${PORT}`,)
}) 