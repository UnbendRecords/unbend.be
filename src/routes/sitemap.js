'use strict';

var sitemap  = require('sitemap');
var express  = require('express');
var router   = express.Router();
var Articles = require('../controllers/articlesController');

var errorsHandler = require('./fixtures/errorsHandler');

var sm = sitemap.createSitemap({
        hostname : '//abmag.be',
        cacheTime : 1000 * 60 * 24  //keep the sitemap cached for 24 hours
    });

function addArticlesToSitemap(posts) {
  for (var post in posts) {
    sm.add({
      url : 'https://abmag.be/article/' +  posts[post].shortUrl,
      changefreq :'weekly'
    });
  }
}

router.get('/sitemap.xml', function (req, res) {
  if (sm.isCacheValid()) {
    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  } else {
    sm.urls = [];

    sm.add({
      url : 'https://abmag.be/',
      changefreq :'daily'
    });

    sm.add({
      url : 'https://abmag.be/edition',
      changefreq :'daily'
    });

    sm.add({
      url : 'https://abmag.be/articles',
      changefreq :'daily'
    });

    sm.add({
      url : 'https://abmag.be/agenda',
      changefreq :'daily'
    });

    sm.add({
      url : 'https://abmag.be/apropos',
      changefreq :'daily'
    });

    Articles.getAll().
      then(function (articles) {

        addArticlesToSitemap(articles);

        sm.toXML(function (xml) {
          res.header('Content-Type', 'application/xml');
          res.send(xml);
        });
      }).catch(function (e) {
        return res.status(500).json(errorsHandler(e));
      });
  }


});

module.exports = router;
