(function () {
    angular.module("userModule").controller('LoginController',LoginController);
    LoginController.$inject=['LoginService'];

    function LoginService(LoginService) {
        vm.uname='';
        vm.email='';
        vm.password='';

        vm.user ={
            uname:vm.uname,
            email:vm.email,
            password:vm.password
        }

        vm.url="/login";
        vm.verifyUser = function verifyUser() {
            LoginService.verifyUser(vm.url,vm.user);

        }
    }
})