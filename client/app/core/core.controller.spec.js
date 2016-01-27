/* jshint expr: true */
(function() {
    'use strict';

    describe('core controller', function() {
        var controller;
        beforeEach(function() {
            module('app.core');

            inject(function($controller) {
                controller = $controller('CoreController');
            });
        });

        it('should provide a property containing the string "World"', function() {
            expect(controller.hello).to.exist;
            expect(controller.hello).to.equal('World');
        });
    });
})();
