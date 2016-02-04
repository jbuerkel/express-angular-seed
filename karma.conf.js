'use strict';

var paths = require('./paths.conf');

module.exports = function(config) {
    config.set({
        autoWatch: false,
        browsers: ['PhantomJS'],
        files: [
            './bower_components/angular/angular.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-aria/angular-aria.js',
            './bower_components/angular-messages/angular-messages.js',
            './bower_components/angular-material/angular-material.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-material/angular-material-mocks.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            paths.clientjsmodule,
            paths.clientjs
        ],
        frameworks: ['mocha', 'sinon-chai'],
        singleRun: true
    });
};
