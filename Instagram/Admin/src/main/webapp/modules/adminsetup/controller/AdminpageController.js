(function () {
    angular.module("adminModule").controller("AdminpageController",AdminpageController);
    
    AdminpageController.$inject = ['HttpService'];
    
    function AdminpageController(HttpService) {
        var vm  = this;
        vm.adminList = [];
        vm.showList = true;
        vm.url = "/getAllAdmins";

        vm.showAdminList = showAdminList;
        vm.editAdmin = editAdmin;
        vm.deleteAdmin = deleteAdmin;

        function showAdminList() {
            HttpService.get(vm.url).then(function (value) {
                vm.adminList = value;
                vm.showList = false;
            },function (reason) {
                console.log("Something occurred"+reason);
            });
        }
        function editAdmin(admin) {
            vm.url = "/edit"+admin.userId;
            HttpService.get(vm.url).then(
                function (value) {
                    //open uibmodal
                },function (reason) {

                });
        }
        function deleteAdmin(admin) {

            vm.url = "/delete";
            HttpService.post(url,admin).then(function (value) {

            },function (reason) {

            });
        }
    }
})();