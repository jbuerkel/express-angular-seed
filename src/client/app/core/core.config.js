(function() {
    'use strict';

    angular
        .module('app.core')
        .config(config);

    /**
     * @ngInject
     * @param {$locationProvider} $locationProvider
     * @param {$mdIconProvider} $mdIconProvider
     * @param {$mdThemingProvider} $mdThemingProvider
     */
    function config($locationProvider, $mdIconProvider, $mdThemingProvider) {
        $locationProvider
            .html5Mode(true);

        $mdIconProvider
            .icon('feedback', './img/feedback.svg')
            .icon('menu', './img/menu.svg');

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('amber');
    }
})();
