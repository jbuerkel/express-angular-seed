/* jshint node: true */
'use strict';

var express = require('express');
var path = require('path');
var paths = require('../../paths.conf');

var router = express.Router();

router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../..', paths.build, 'index.html'));
});

module.exports = router;
