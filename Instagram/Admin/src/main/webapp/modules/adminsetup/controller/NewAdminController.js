(function () {
    angular.module("adminModule").controller("NewAdminController",NewAdminController);

    NewAdminController.$inject = ['NewAdminService'];
    function NewAdminController(NewAdminService) {
        var vm = this;
        vm.name = '';
        vm.userId = '';
        vm.email = '';
        vm.password = '';
        vm.repassword = '';

        vm.saveAdmin = saveAdmin;
        vm.url = "/signup";
        function saveAdmin() {
            vm.newAdminObj={
                'name':vm.name,
                'userId':vm.userId,
                'email':vm.email,
                'password':vm.password
            };
            vm.response = NewAdminService.saveAdmin(vm.url,vm.newAdminObj);
            console.log("response"+vm.response);
            if(!(vm.response==true|| vm.response == false)){
                vm.show_error_msg = true;
            }
        }
    }
})();