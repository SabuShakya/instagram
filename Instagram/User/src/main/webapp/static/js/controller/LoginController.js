(function () {
    angular.module('userModule').controller('LoginController',LoginController);
    LoginController.$inject=['$location','LoginService'];

    function LoginService($location, LoginService) {
        vm.uname='';
        vm.email='';
        vm.password='';
        vm.url="/login";

        vm.user ={
            uname:vm.uname,
            email:vm.email,
            password:vm.password
        }

        vm.verifyUser= verifyUser();
        vm.signup = signup;

        function verifyUser() {
            LoginService.verifyUser(vm.url,vm.user);
            vm.boolean =LoginService.verifyUser(vm.url,vm.user);
            if (boolean= true){
                $location.path("/main");
            }else {
                vm.errormsg = "Incorrect userId or password";
                console.log("error occurred" + reason);
            }
        }

        function signup () {
            $location.path("/signup");
        };
    }
})