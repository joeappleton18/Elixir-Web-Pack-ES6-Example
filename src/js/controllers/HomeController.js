class HomeController {

     constructor($http) {
        this.title = 'Elixir + Angular + Web pack + ECMAScript 6';
        this.$http = $http;
     }

}

HomeController.$inject = ['$http'];

export default {
  name: 'HomeController',
  fn: HomeController
};