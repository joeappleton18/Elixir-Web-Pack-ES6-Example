class HomeController {

     constructor($http) {
        this.title = 'elixir  + angular + web pack + ECMAScript 6 support';
        this.number = 123432324344;
        this.$http = $http;
     }

}

HomeController.$inject = ['$http'];

export default {
  name: 'HomeController',
  fn: HomeController
};