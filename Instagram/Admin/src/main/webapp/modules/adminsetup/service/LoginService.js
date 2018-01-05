(function () {
    angular.module("adminModule").service("LoginService", LoginService);

    LoginService.$inject = ['HttpService','$location'];

    function LoginService(HttpService,$location) {
        var vm = this;
        vm.verifyAdmin = verifyAdmin;

        function verifyAdmin(url,userId,password) {
            HttpService.get(url,userId).then(function (response) {
                console.log("response" + response);
                if ((response != null) && (response.password == password)) {
                    $location.path("/viewExistingAdmin");
                    return true;
                }else {
                    vm.valid = false;
                    vm.errormsg = "Incorrect userId or password";
                    console.log("error occurred");
                    return false;
                }
                }, function (reason) {
                    vm.errormsg = reason;
                    console.log("error occurred" + reason);
                    return false;
                });
        }
    }

})();