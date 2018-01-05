angular.module("userModule").service('SignupService', SignupService)
SignupService.$inject=['$http','$location','HttpService'];

function SignupService($http, $location, HttpService) {
    var vm = this;
    vm.createUser = createUser;

    function createUser(url,newUser) {
        HttpService.post(url, newUser)
            .then(
                function (response) {
                    $location.path("/login");
                    console.log("success");
                },
                function (reason) {
                    console.log("error");
                }
            )
    }
}
