'use strict';

var paths = require('./paths.conf');

module.exports = function(config) {
    config.set({
        autoWatch: false,
        browsers: ['PhantomJS'],
        files: [
            './bower_components/angular/angular.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            paths.clientjsmodule,
            paths.clientjs
        ],
        frameworks: ['mocha', 'sinon-chai'],
        singleRun: true
    });
};
