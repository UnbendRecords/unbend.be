'use strict';

var express       = require('express');
var router        = express.Router();

var sendEmail     = require('../../components/sendEmail');

var errorsHandler = require('../fixtures/errorsHandler');

/**
 * Post Articles data.
 */
router.post('/', function (req, res) {

  var email   = req.body.email;
  var name    = req.body.name;
  var message = req.body.message;

  var mailOptions = {
    from: 'ABMag Website <webmaster@abmag.be>',
    to: 'louis@alphabetamagazine.com',
    replyTo: email,
    subject: name + ' vous a laissé un message',
    text: 'expediteur : ' + name + ' (' + email + ')\nmessage : ' + message
  };

  sendEmail(mailOptions)
    .then(function (result) {

      return res.status(200).json(result);
    })
    .catch(function (e) {

      return res.status(500).json(errorsHandler(e));
    });

});

module.exports = router;
