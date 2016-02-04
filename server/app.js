/* jshint node: true */
'use strict';

var express = require('express');
var path = require('path');
var helmet = require('helmet');
var logger = require('morgan');
var paths = require('../paths.conf');

var core = require('./core/router');

var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '..', paths.build)));

app.use(core);

module.exports = app;
