var router = require("express").Router()
//var apiroutes = require("./api")
var viewroutes = require("./view")

//router.use("/api",apiroutes)
router.use("/",viewroutes)

module.exports = router