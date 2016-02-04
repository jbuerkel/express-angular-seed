(function() {
    'use strict';

    angular
        .module('app.core')
        .config(config);

    /**
     * @ngInject
     * @param {$mdIconProvider} $mdIconProvider
     * @param {$mdThemingProvider} $mdThemingProvider
     */
    function config($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .icon('menu', './img/icons/menu.svg')
            .icon('feedback', './img/icons/feedback.svg');

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('amber');
    }
})();
