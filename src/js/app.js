import angular from 'angular';
import 'angular-ui-router';
import constants from './constants';
import Config from './config';

import './controllers/';
import './services';

//application requires
const requires  = [
    'app.controllers',
    'app.services',
    'ui.router'
];
/** inject modules into the app **/
angular.module('app',requires);
angular.module('app').constant('AppSettings', constants);
angular.module('app').config(Config);



