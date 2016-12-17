class UserService {

    constructor($http, AppSettings) {
        this.$http = $http;
        this.AppSettings = AppSettings;
    }

    show() {
       return this.$http.get(this.AppSettings.API_URL + 'users' + '/');
    }

}
export default {
    name: 'UserService',
    fn: UserService
};
