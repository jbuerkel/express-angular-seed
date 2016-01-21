/* jshint node: true */
'use strict';

var express = require('express');
var path = require('path');
var helmet = require('helmet');
var logger = require('morgan');

var core = require('./core/core.module.js').router;
// require other modules' routers

var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../build')));

// use other modules' routers

app.use(core);

module.exports = app;
