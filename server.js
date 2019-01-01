
var path = require("path");

// var nodemailer = require('nodemailer');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set("view engine","html");
app.use('/public', express.static(path.join(__dirname, 'public')));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.get("/", (req, res) => {
    res.render("index.html");
});



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
})

 