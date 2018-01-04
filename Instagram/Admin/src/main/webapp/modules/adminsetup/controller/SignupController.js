(function () {
    angular.module("adminModule").controller("SignupController",SignupController);

    SignupController.$inject = ['SignupService'];
    function SignupController() {
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
        vm.newAdmin = {
            name: vm.name,
            userId:vm.userId,
            email:vm.email,
            password:vm.password
        };
        vm.saveAdmin = saveAdmin;
        vm.url = "/signup";
        function saveAdmin() {
            vm.response = SignupService.saveAdmin(vm.url,vm.newAdmin);
            console.log(vm.response);
            if(!(vm.response==true|| vm.response == false)){
                vm.show_error_msg = true;
            }
        }
    }
})();