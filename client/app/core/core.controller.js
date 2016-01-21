(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    /**
     * @ngInject
     * @constructor
     */
    function CoreController() {
        var vm = this;

        vm.hello = 'World';
    }
})();
