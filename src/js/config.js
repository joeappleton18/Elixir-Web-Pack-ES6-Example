
class Config {

  constructor($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('Home', {
          url: '/',
          controller: 'HomeController as HomeController',
          templateUrl: 'views/home/index.html',
          title: 'Home'
        });
  }



}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];


export default Config;