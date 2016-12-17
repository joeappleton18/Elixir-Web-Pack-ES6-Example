import angular from 'angular';

const controllersModule = angular.module('app.controllers', []);


function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

let controllers = requireAll(require.context('.', true, /^(?!.*spec).*\/(?!.*index).*\.js$/));

Object.keys(controllers).forEach(key => {

    let item = controllers[key];
    if (!item) {
        return;
    }

    controllersModule.controller(item.default.name, item.default.fn);

});


export default  controllersModule;

