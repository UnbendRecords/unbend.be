'use strict';

var Discography           = require('../models/discographyModel');

var getAll = function () {
  return Discography.findAll({
    order: 'createdAt DESC'
  });
};

module.exports = {
  getAll: getAll
};
