'use strict';

describe('CoreController', function() {
    var controller;

    beforeEach(function() {
        module('app.core');

        inject(function($controller) {
            controller = $controller('CoreController');
        });
    });

    it('should provide a title property containing the string "express-angular-seed"', function() {
        expect(controller.title).to.exist;
        expect(controller.title).to.equal('express-angular-seed');
    });
});
