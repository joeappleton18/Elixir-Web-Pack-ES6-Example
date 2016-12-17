


describe('HomeController', function () {
    let ctrl, $scope, deferred, q;
    beforeEach(module('app'));
    beforeEach(inject(($controller, $rootScope, $httpBackend, $q, UserService) => {
        $scope = $rootScope.$new();
        q = $q;
        deferred.resolve();
        //mock the functions on the user service
        var mockUserService = {
            show: () => {
                return deferred.promise;
            },

        }
        ctrl = $controller('HomeController', {$scope: $scope, UerService: mockUserService});

    }));

   /* it('should exist', () => {
        expect(ctrl).toBeDefined();
    });

    it('should set the title', () => {
        expect(ctrl.title).toEqual('Elixir + Angular + Web pack + ECMAScript 6');
    });
    */
    it('should get a list of users when the controller loads', () => {
        deferred.resolve([{id: 1, name: 'Bloggs'}, {id: 2, name: 'Joe'}]);
        $scope.$apply();
    });

});