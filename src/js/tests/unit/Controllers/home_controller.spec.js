describe('HomeController', function () {
    let ctrl, $scope;
    beforeEach(module('app'));

    beforeEach(inject(($controller, $rootScope,  UserService, $q, $injector) => {
        $scope = $rootScope.$new();
        deferred = $q.defer();
        spyOn(UserService,'show').and.returnValue(deferred.promise);
        ctrl = $controller('HomeController',{$scope:$scope, UserService: UserService});

    }));

    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });

    it('should set the title', () => {
        expect(ctrl.title).toEqual('Elixir + Angular + Web pack + ECMAScript 6');

    });

    it('should get a list of users when the controller loads', () => {
        //deferred.resolve([{ id: 1 }, { id: 2 }]);
        console.log($scope.name);

    });

});