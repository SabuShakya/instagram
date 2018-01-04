(function () {
    angular.module("adminModule").service("LoginService", LoginService);

    LoginService.$inject = ['HttpService'];

    function LoginService(HttpService) {
        var vm = this;
        vm.verifyAdmin = verifyAdmin;

        function verifyAdmin(url) {
            HttpService.get(url).then(function (response) {
                    console.log("response" + value);
                    if (response == true) {
                        return true;
                    } else {
                        return false;
                    }
                }, function (reason) {
                    console.log("error occurred" + reason);
                    return reason;
                });
        }
    }

})();