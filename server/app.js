'use strict';

var express = require('express');
var helmet = require('helmet');
var logger = require('morgan');
var resolve = require('app-root-path').resolve;

var core = require('./routes/core');

var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.static(resolve('./dist'), {index: false}));

app.use(core);

module.exports = app;
