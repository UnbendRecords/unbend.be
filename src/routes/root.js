'use strict';

var express      = require('express');
var router       = express.Router();

var errorsHandler = require('./fixtures/errorsHandler');

/**
 * Get root page.
 */
router.get('/', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('index');

});

/**
 * Get Home page.
 */
router.get('/home', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('index');

});

/**
 * Get Home view.
 */
router.get('/view/home', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('home');

});

/**
 * Get studio page.
 */
router.get('/studio', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('index');

});

/**
 * Get studio view.
 */
router.get('/view/studio', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('studio');

});

/**
 * Get discography page.
 */
router.get('/discography', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('index');

});

/**
 * Get discography view.
 */
router.get('/view/discography', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('discography');

});

/**
 * Get contact page.
 */
router.get('/contact', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('index');

});

/**
 * Get contact view
 */
router.get('/view/contact', function (req, res) {

  if (req.user) {
    console.log(req.user);
  }

  res.render('contact');

});

module.exports = router;
