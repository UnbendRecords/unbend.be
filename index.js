'use strict';

var bodyParser       = require('body-parser');
var compress         = require('compression');
var config           = require('config');
var express          = require('express');
var favicon          = require('serve-favicon');
var path             = require('path');
var prerender        = require('prerender-node');

var herokuAwake      = require('./src/resources/herokuAwake');

var logger           = require('./src/resources/logger');

var root             = require('./src/routes/root');
var sitemap          = require('./src/routes/sitemap');
var apiSendemail     = require('./src/routes/api/apiSendEmail');
var apiDiscography   = require('./src/routes/api/apiDiscography');
var apiPhotos        = require('./src/routes/api/apiPhotos');

var app              = express();

/*
  App Config
 */
app.use(compress());
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ reviver: true }));
app.use(express.static(path.join(__dirname, './src/static')));
app.use(prerender.set('prerenderToken', config.prerender.token));
app.use(favicon(__dirname + '/src/static/assets/img/favicon/favicon.ico'));

/*
  Routes
 */
app.use('/', root);
app.use('/sitemap.xml', sitemap);
app.use('/api/sendemail', apiSendemail);
app.use('/api/discography', apiDiscography);
app.use('/api/photos', apiPhotos);

/*
  Logger
 */
logger.info({
  config: config,
  state: 'starting server...'
});

/*
  Server
 */
var http = app.listen(config.httpPort, function () {
  var port = http.address().port;
  logger.info({
    port: port,
    state: 'http server started!'
  });
});

herokuAwake('unbend');

