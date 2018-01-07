(function () {
    angular.module("adminModule").controller("SignupController",SignupController);

    SignupController.$inject = ['SignupService','$scope'];
    function SignupController(SignupService,$scope) {
        var vm = this;
        vm.name = '';
        vm.userId = '';
        vm.email = '';
        vm.password = '';
        vm.repassword = '';
        vm.response = '';
        vm.match = false;
        vm.show_error_msg = false;
        if (!(vm.password == vm.repassword)){
            vm.match = true;
        }
        vm.saveAdmin = saveAdmin;
        vm.url = "/signup";
        function saveAdmin() {
            vm.newAdminObj={
                'name':vm.name,
                'userId':vm.userId,
                'email':vm.email,
                'password':vm.password
            };
            vm.response = SignupService.saveAdmin(vm.url,vm.newAdminObj);
            console.log("response"+vm.response);
            if(!(vm.response==true|| vm.response == false)){
                vm.show_error_msg = true;
            }
        }
    }
})();