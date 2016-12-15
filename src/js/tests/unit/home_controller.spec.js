describe('Unit:HomeController', function () {

    let ctrl;
    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('app');

        angular.mock.inject(($controller) => {
            ctrl = $controller('ExampleCtrl');
        });
    });

    if('should exist', () => {
        expect(ctrl).toBeDefined();
    });

} )