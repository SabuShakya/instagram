(function () {
    angular.module("adminModule").controller("LoginController", LoginController);

    LoginController.$inject = ['$location', 'LoginService','HttpService'];

    function LoginController($location,LoginService,HttpService) {
        var vm = this;
        vm.userId = '';
        vm.password = '';
        vm.errormsg = '';
        vm.valid = true;
        vm.url = "/login/";

        vm.loginUser = loginUser;
        vm.signup = signup;

        function signup () {
            $location.path("/signup");
        };

        function loginUser () {
            vm.booleanValue =LoginService.verifyAdmin(vm.url,vm.userId);
                    if (booleanValue = true){
                        $location.path("/viewExistingAdmin");
                    }else {
                        vm.valid = false;
                        vm.errormsg = "Incorrect userId or password";
                        console.log("error occurred" + reason);
                    }
        };

    }
})();