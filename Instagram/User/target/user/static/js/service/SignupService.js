angular.module("userModule").service('SignupService', SignupService)
SignupService.$inject=['$http','HttpService'];

function SignupService($http, HttpService) {
    var vm = this;
    vm.createUser = createUser;

    function createUser(url,data) {
        HttpService.post(url, data)
            .then(
                function (response) {
                    // location.pathname("/login");
                    console.log("success");
                },
                function (reason) {
                    console.log("error");
                }
            )
    }
}
