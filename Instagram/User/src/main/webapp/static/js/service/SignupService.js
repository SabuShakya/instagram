(function () {
angular.module("userModule").service('SignupService', SignupService)
SignupService.$inject=['$location','HttpService'];

function SignupService( $location, HttpService) {
    var vm = this;
    vm.createUser = createUser;

    function createUser(url,newUser) {
        HttpService.post(url, newUser)
            .then(
                function (response) {
                    // $location.path("/login");
                    console.log("success");
                },
                function (reason) {
                    console.log("error");
                }
            )
    }
}
})();
