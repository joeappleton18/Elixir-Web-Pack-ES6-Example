describe('Unit: UsersService', function () {

    let http, service;

    beforeEach(module('app'));
    beforeEach(inject(($httpBackend, UsersService) => {
        http = $httpBackend;
        service = UsersService;
    }));

    it('should exist',() => {
        expect(service).toBeDefined();
    });
})