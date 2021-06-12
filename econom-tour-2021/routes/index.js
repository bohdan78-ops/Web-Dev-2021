var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Express' });
});
router.get('/countries', function(req, res, next) {
  res.render('countries', { title: 'Express' });
});
router.get('/request', function(req, res, next) {
  res.render('request', { title: 'Express' });
});
/* Post home page. */
router.post('/request', function(req, res, next) {
  console.log('vasya prodae moloko');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bogdanperevoznik74@gmail.com',
        pass: 'sgkvxedvqhyrlwgb'
    }
});

const mailOptions = {
    from: 'bogdanperevoznik74@gmail.com',
    to: 'andruhovski@gmail.com',
    subject: 'Заявка на тур',
    text: 'Надійшла заявка на тур від ' + req.body.username +
        ' Зв`яжіться з ним за адресою ' + req.body.email +
        ' або за телефоном' + req.body.phone,
    html: 'Надійшла заявка на тур від <strong>' + req.body.username +
        '</strong> Зв`яжіться з ним за адресою ' +
        '<a href=mailto:' + req.body.email + '>' + req.body.email + '</a>' +
        ' або за телефоном <a href=callto:' + req.body.phone + '>' + req.body.phone + '</a>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
        res.render('request-error', { title: 'Заявка' });
    } else {
        console.log('Email sent: ' + info.response);
        res.render('request-succses', { title: 'Express' });
    }
});
  
});


module.exports = router;
