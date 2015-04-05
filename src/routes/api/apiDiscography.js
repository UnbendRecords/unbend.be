'use strict';

var express       = require('express');
var router        = express.Router();

// var Editions      = require('../../controllers/editionsController');

var errorsHandler = require('../fixtures/errorsHandler');

/**
 * Get Photos data.
 */
router.get('/', function (req, res) {

  return res.status(200).json('ok');

});

module.exports = router;
