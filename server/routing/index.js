const router = require("express").Router()
const message = require("./message")
const author = require("./author")

router.use("/message", message)// http://localhost:5000/api/message
router.use("/author", author)// http://localhost:5000/api/author

module.exports = router //exports all the stuff to /server/index.js