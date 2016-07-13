'use strict';

var compression = require('compression');
var express = require('express');
var helmet = require('helmet');
var morgan = require('morgan');
var resolve = require('app-root-path').resolve;

var core = require('./routes/core');

var app = express();

app.use(compression());
app.use(helmet());
if (app.get('env') !== 'production') {
    app.use(morgan('dev'));
}
app.use(express.static(resolve('./dist'), {index: false}));

app.use(core);

module.exports = app;
