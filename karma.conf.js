module.exports = function(config) {
    config.set({
        autoWatch: false,
        browsers: ['PhantomJS'],
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-aria/angular-aria.js',
            './node_modules/angular-material/angular-material.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './node_modules/angular-material/angular-material-mocks.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './src/client/**/*.module.js',
            './src/client/**/*.js'
        ],
        frameworks: ['mocha', 'sinon-chai'],
        singleRun: true
    });
};
