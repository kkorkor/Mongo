var express = require("express")
var expresshandlebars = require("express-handlebars")
var mongoose = require("mongoose")

var port = process.env.port|| 3000
var app = express("")
var routes = require("./routes")

app.use(express.static("public"))
app.engine("handlebars",expresshandlebars({defaultLayout:"main"}))
app.set("view engine","handlebars")
app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.listen(port,function(){
    console.log("listen on port",port)
})