
class Config {

  constructor($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
          url: '/',
          controller: 'HomeController as home',
          templateUrl: 'views/home/index.html',
          title: 'home'
        });
  }



}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];


export default Config;