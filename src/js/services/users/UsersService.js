class UserService {

     constructor($http) {
        this.$http = $http;
     }

}

HomeController.$inject = ['$http'];

export default {
  name: 'UsersService',
  fn: UsersService
};