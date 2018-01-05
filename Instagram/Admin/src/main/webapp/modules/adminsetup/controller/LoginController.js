(function () {
    angular.module("adminModule").controller("LoginController", LoginController);

    LoginController.$inject = ['$location', 'LoginService','HttpService'];

    function LoginController($location,LoginService,HttpService) {
        var vm = this;
        vm.userId = '';
        vm.password = '';
        vm.errormsg = '';
        vm.valid = true;
        vm.booleanValue = true;
        vm.url = "/login";

        vm.loginUser = loginUser;
        vm.signup = signup;

        function loginUser() {
            vm.adminObj = {
                'userId' : vm.userId,
                'password' : vm.password
            };
        // LoginService.verifyAdmin(vm.url,vm.adminObj)
        //     .then(function (response) {
        //         $location.path("/adminPage");
        // },function (reason) {
        //             vm.valid = false;
        //             vm.errormsg = "User not registered";
        //     });
        // };
            vm.response = LoginService.verifyAdmin(vm.url,vm.adminObj);
            if (vm.response){
            $location.path("/adminPage");
            }else{
                vm.valid = false;
                vm.errormsg = "User not registered";
            }
        }

        function signup() {
            $location.path("/signup");
        };

    }
})();