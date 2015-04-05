'use strict';

var Promise  = require('bluebird'),
config       = require('config'),
nodemailer   = require('nodemailer'),
sesTransport = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransport(sesTransport({
  accessKeyId     : config.ses.key,
  secretAccessKey : config.ses.secret,
  rateLimit       : 1,
  region          : 'eu-west-1'
}));

module.exports = function (mailOptions) {

  return new Promise(function (resolve, reject) {

    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
