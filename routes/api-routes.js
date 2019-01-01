require('dotenv').config();
var nodemailer = require('nodemailer');


// POST route from contact form
module.exports = function (app) {
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
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,  // generated ethereal user
        pass: process.env.GMAIL_PASS // generated ethereal password
      }
      // tls: {
      //   rejectUnauthorized: false
      // }
    });

    // setup email data with unicode symbols
    let mailOptions = {
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
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      alert("Email has been sent!");







    });
  });
}