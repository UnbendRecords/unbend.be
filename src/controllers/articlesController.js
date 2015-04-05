'use strict';

// var Promise         = require('bluebird');
var Articles           = require('../models/articlesModel');

// var userAttributes =  [
//                         'id',
//                         'email',
//                         'first_name',
//                         'last_name',
//                         'role',
//                         'twitter',
//                         'gPlus',
//                         'facebook',
//                         'linkedIn'
//                       ];

// var getAll = function () {
//   return Articles.findAll({
//     where: {
//       validate: 1
//     },
//     order: 'publishDate DESC',
//     include: [
//       { model: User,
//         attributes: userAttributes
//       }]
//   });
// };

// var getLast = function (limit) {
//   return Articles.findAll({
//     where: {
//       validate: 1
//     },
//     order: 'publishDate DESC',
//     limit: limit,
//     include: [
//       { model: User,
//         attributes: userAttributes
//       }]
//   });
// };

// var getOne = function (urlShort) {
//   return Articles.find({
//     where: {
//       shortUrl: urlShort,
//       validate: 1
//     },
//     include: [
//       { model: User,
//         attributes: userAttributes
//       }]
//   });
// };

module.exports = {
};
