import angular from 'angular';
import './controllers/';
import 'angular-ui-router';
import Config from './config';


//application requires
const requires  = [
    'app.controllers',
    'ui.router'
];

angular.module('app',requires);
angular.module('app').config(Config);
