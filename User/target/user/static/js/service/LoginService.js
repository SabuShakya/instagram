(function() {
    angular.module("userModule").service("LoginService", LoginService);
    LoginService.$inject = ['$http','HttpService'];

    function LoginService($http, HttpService) {
        var vm = this;
        vm.verifyUser = verifyUser;

        function verifyUser(url) {
            HttpService.get(url)
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
})();