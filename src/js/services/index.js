import angular from 'angular';

const servicesModule = angular.module('app.services', []);


function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

let services = requireAll(require.context('.', true, /^(?!.*spec).*\/(?!.*index).*\.js$/));

Object.keys(services).forEach(key => {

    let item = services[key];
    if (!item) {
        return;
    }

    if (typeof item.default.fn === 'function' && item.default.fn) {
        servicesModule.service(item.default.name, item.default.fn);
    }
});



export default  servicesModule;

