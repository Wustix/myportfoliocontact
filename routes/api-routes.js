require('dotenv').config();
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
        user: process.env.GMAIL_USER,  // generated ethereal user
        pass: process.env.GMAIL_PASS
      }
      // tls: {
      //   rejectUnauthorized: false
      // }
    });

    // setup email data with unicode symbols
    var mailOptions = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
      to: 'wroehrman@yahoo.com', // list of receivers
      subject: 'New message from contact at Wes Roehrman', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };

    // transporter.sendMail({
    //   from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
    //   to: 'wroehrman@yahoo.com', // list of receivers
    //   subject: 'New message from contact at Wes Roehrman', // Subject line
    //   text: 'I hope this message gets through!',
    //   auth: {
    //     user: 'user@example.com',
    //     refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
    //     accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
    //     expires: 1484314697598
    //   }
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    res.alert("Email has been sent!");








  });
}