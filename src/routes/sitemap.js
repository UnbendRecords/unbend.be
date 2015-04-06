'use strict';

var sitemap  = require('sitemap');
var express  = require('express');
var router   = express.Router();

var sm = sitemap.createSitemap({
        hostname : '//unbend.be',
        cacheTime : 1000 * 60 * 24  //keep the sitemap cached for 24 hours
    });

router.get('/', function (req, res) {
  if (sm.isCacheValid()) {
    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  } else {
    sm.urls = [];

    sm.add({
      url : 'http://unbend.be/',
      changefreq :'monthly'
    });

    sm.add({
      url : 'http://unbend.be/discography',
      changefreq :'daily'
    });

    sm.add({
      url : 'http://unbend.be/studio',
      changefreq :'monthly'
    });

    sm.add({
      url : 'http://unbend.be/contact',
      changefreq :'monthly'
    });

    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });

  }


});

module.exports = router;
