// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/resume", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/resume.html"));
  });

  
  
};