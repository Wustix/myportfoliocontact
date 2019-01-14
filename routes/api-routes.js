require('dotenv').config();
var db = require("../models");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');


// POST route from contact form
module.exports = function (app) {

  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json());


  app.post('/contact', function (req, res) {
    var output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;



    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.S3_KEY,  // generated ethereal user
        pass: process.env.S3_SECRET
      }

    });

    // setup email data with unicode symbols
    var mailOptions = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
      to: 'wroehrman@yahoo.com', // list of receivers
      subject: 'New message from contact at Wes Roehrman', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      // else {
      //   res.status(201).send('Email sent successfully!');
      // }

      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


    });
    // res.redirect("/");
    console.log(req.body);
    db.Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    })
      .then(function (dbMessage) {
        res.send(dbMessage);
      });


  });



}

