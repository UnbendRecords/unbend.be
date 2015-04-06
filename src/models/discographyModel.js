'use strict';

var Sequelize     = require('sequelize');

var sqlConnection = require('../resources/sqlConnection');

module.exports    = sqlConnection.define('Discography', {
  title               : Sequelize.STRING,
  artist              : Sequelize.STRING
});
