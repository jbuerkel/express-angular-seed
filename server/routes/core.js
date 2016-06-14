'use strict';

var express = require('express');
var resolve = require('app-root-path').resolve;

var router = express.Router();

router.get('/*', function(req, res) {
    res.sendFile(resolve('./dist/index.html'));
});

module.exports = router;
