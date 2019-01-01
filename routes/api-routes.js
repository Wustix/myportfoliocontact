require('dotenv').config();
var nodemailer = require('nodemailer');
var keys = require("./config/keys.js");
var GMAIL_User = abracadabra;

// POST route from contact form
module.exports = function (app) {
  app.post('/contact', function (req, res) {
    let mailOpts, Trans;
    Trans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: GMAIL_USER,
      subject: 'New message from contact form at WesRoehrman',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    Trans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('contact-failure');
      }
      else {
        res.render('contact-success');
      }
    });
  });
}