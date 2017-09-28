'use strict';

var express = require('express');
var app = express();

var compression = require('compression');

if(process.env.NODE_ENV === undefined ){
  var webpack = require('webpack');
  var config = require('./webpack.config.js');

  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(compression());
var port = process.env.PORT || 8080;

var routes = require('./routes/index.js');

app.use('/', routes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
