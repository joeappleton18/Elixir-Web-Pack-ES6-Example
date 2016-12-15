describe('HomeController', function() {
    let ctrl;
    beforeEach(module('app'));

    beforeEach(inject(($controller) => {
        ctrl = $controller('HomeController');
    }));

    it('it expects home controller to exist', () => {
        expect(ctrl).toBeDefined();
    });

    it('it expects the title to be set', () => {
        console.log(ctrl.title);
        expect(ctrl.title).toEqual("Elixir + Angular + Web pack + ECMAScript 6");
    });

})