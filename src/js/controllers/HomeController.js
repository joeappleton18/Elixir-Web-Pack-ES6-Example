class HomeController {

    constructor(scope,UserService) {
        this.userService = UserService;
        this.scope = scope;
        this.title = 'Elixir + Angular + Web pack + ECMAScript 6';
        this.scope.helloWorld = this.hello;
        this.getUsers();
    }

    getUsers() {
        this.userService.show().then((response) => {
            this.users = response.data
        }, (errorResponse) => {
            console.log('error' + errorResponse);
        });
    }

    hello() {
        alert('hello world');
    }

}

export default {
    name: 'HomeController',
    fn: ['$scope','UserService', HomeController],
};