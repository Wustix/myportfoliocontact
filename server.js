
// var path = require("path");

var nodemailer = require('nodemailer');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine","html");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { user: req.user });
});

require("./routes/api-routes.js");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
})

 