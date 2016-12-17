describe('Unit: UserService', function () {

    let http, service;

    beforeEach(module('app'));
    beforeEach(inject((UserService, AppSettings, $httpBackend) => {
        http = $httpBackend;
        service = UserService;
        appSettings = AppSettings;
        // hack fix a $scope.digest error
        http.whenGET(/\.html$/).respond('');
        http.flush();
    }));

    afterEach(() => {
        http.verifyNoOutstandingExpectation(false);
        http.verifyNoOutstandingRequest();
    });


    it('should exist', () => {
        expect(service).toBeDefined();
    });

    it('should get all users', () => {
        http.expectGET(appSettings.API_URL + 'users' + '/').respond('response');
        service.show().then((response) => {
            expect(response.data).toEqual('response')
        });
        http.flush();
    });


})