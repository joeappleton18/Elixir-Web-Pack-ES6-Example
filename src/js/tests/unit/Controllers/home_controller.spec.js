describe('HomeController', function() {
    let ctrl;
    beforeEach(module('app'));

    beforeEach(inject(($controller) => {
        ctrl = $controller('HomeController');
    }));

    it('should exist', () => {
        expect(ctrl).toBeDefined();
    });

    it('should set the title', () => {
        expect(ctrl.title).toEqual('Elixir + Angular + Web pack + ECMAScript 6');
    });

})